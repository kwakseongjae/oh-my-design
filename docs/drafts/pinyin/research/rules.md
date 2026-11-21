# /pinyin research — rule candidates (Chinese, Simplified, Mainland China)

Research draft, 2026-11-21. **No native reader of Mainland Chinese has reviewed this file.** Region for every candidate: Mainland China (zh-CN) unless the line says otherwise. Where a source covers Taiwan or Hong Kong, the candidate says so and the rule is not carried across.

## Read this first

- **How quotes were taken.** Microsoft quotes come from a local pdftotext extract of the PDF (see MS below) and are character-for-character, joining only line-break whitespace; where a quote is a table cell, the cell was rebuilt from the -layout columns and is marked "(table cell)". Code points are given where a Microsoft rule depends on width; they were read from the extract, not from the PDF glyphs. **Every other quote came through WebFetch**, which hands the page to an extraction model that will not return more than about 120 characters per quote. Pages fetched with a verbatim-quote prompt: AD-cw, AD-df, SM-* (component pages), MOE54, GOV-TY, EP, CLREQ, MIIT, the W3C GB/T 15834 translation, and narrow re-passes on TB-cw, TB-corp, WP, ZD-pu, ZD-se, ZD-df, TB-mix. **Single broad pass only** (quotes asked for, but in a summarising prompt): TB-pu, TB-unit, TB-exp, ZD-pr, ZD-lib, ZD-sc, MDN, MZ-sumo, WX, SM-cg (SM-cg had a second targeted pass for its tables). Broad passes are known to slip: on ZD-se and ZD-df a narrow pass returned example labels in a different order from the broad pass (noted where it matters). Every quote in this file was afterwards checked mechanically as a substring of the fetched text (or of the MS extract); the only non-matches are Microsoft table cells rebuilt from -layout columns, marked as such. Full-width vs half-width (，vs , ；vs ; ～ vs ~ … vs ...) in WebFetch quotes is **not verified at code-point level**. A native reader should re-read each quote on the page before the skill ships.
- **Chinese strings.** Every Chinese string here is a verbatim quote with its source key. The outer 「」 around a quote is our wrapper, not part of the quote (inner 「」 and “” are the source's). There are no composed Chinese examples; where a source gives no example, the candidate has none. Test lines contain word lists and regexes written by us; word lists are drawn from the quoted sources, and anything else is marked *(ours, unreviewed)*.
- **CLREQ section numbers** are as printed in the document (confirmed by a narrow pass), with the heading named where it helps.
- **Kinds.** TYPO = checkable in CSS or rendered text; WRITE = wording, register, punctuation, notation.
- **The Chinese text of GB/T 15834-2011 (punctuation) and GB/T 15835-2011 (numbers) was not opened** (moe.gov.cn redirect loop; see gaps.md). Part 5 of GB/T 15834 (positions of punctuation marks and line-start/line-end rules) **was** read in W3C's English translation (2013, unofficial, Part 5 only) and is cited as STD-tr. Other candidates cite what was opened, and say where a company guide is clearly restating the standard. Ant Design's copywriting page still points to the superseded 1995 edition of 《标点符号用法》.

## Strength labels

| Label | Meaning |
|---|---|
| LAW | A State Council notice or a ministerial order (部令). Binding within its stated scope. |
| AUTH | A ministry document that is not a standard: here MIIT's 适老化 (age-friendly) design specifications. Scope is the age-friendly version of a site or app. |
| STD | A national standard read in its Chinese text (GB/T = 推荐性, recommended, not mandatory). **None in this pass.** |
| STD-tr | GB/T 15834-2011 Part 5, read in W3C's unofficial English translation (W3C Chinese news, 2013-12-02). Quotes are of the translation, not of the standard. |
| W3C | W3C CLREQ, a Group Note Draft (04 November 2026). Describes practice; not a standard. Region is copied from the sentence quoted. |
| PRAC(n/4) | Stated in n of the 4 Mainland company design systems read that have a writing section: **Ant Design** (Ant Group), **Teambition Clarity Design** (Alibaba), **Zan Design** (Youzan), **Semi Design** (ByteDance/Douyin). A guide that is silent is not counted against; each candidate says how many address the topic. WeChat Mini Program design guide and Element Plus were opened but have no writing rules beyond what is cited; Arco and TDesign could not be read (gaps.md). None of the four states a region; all four publishers are Mainland companies writing for Mainland products. |
| L10N(n/4) | Stated in n of the 4 translation guides read: **Microsoft** zh-CN Localization Style Guide (Microsoft software and docs), **WordPress** China team 翻译风格指南 (cn.wordpress.org; translated OSS UI), **MDN** zh-CN translation guide (developer docs, not UI), **Mozilla SUMO** zh-CN (support articles, not UI). Counted apart from company guides: they describe translated text. |

## Source keys

| Key | Source | URL |
|---|---|---|
| MS | Microsoft, Chinese (Simplified) Localization Style Guide (PDF, 58 pp.; local extract /Users/kwakseongjae/.omd-workers/lang-sources/ms-chinese-simplified-2026-11-21.txt) | https://download.microsoft.com/download/1/5/9/159cb91c-b61b-4385-97ca-80ccc7ff1fa0/zho-chn-StyleGuide.pdf (from https://aka.ms/chinese-simplified-styleguide) |
| AD-cw | Ant Design — 文案 (raw markdown) | https://raw.githubusercontent.com/ant-design/ant-design/master/docs/spec/copywriting.zh-CN.md (rendered: https://ant.design/docs/spec/copywriting-cn) |
| AD-df | Ant Design — 数据格式 (raw markdown) | https://raw.githubusercontent.com/ant-design/ant-design/master/docs/spec/data-format.zh-CN.md (rendered: https://ant.design/docs/spec/data-format-cn) |
| TB-cw | Teambition Clarity Design — 通用文案 | https://design.teambition.com/doc/copywriting |
| TB-pu | Teambition Clarity Design — 标点符号 | https://design.teambition.com/doc/punctuation |
| TB-unit | Teambition Clarity Design — 数字、时间及货币单位 | https://design.teambition.com/doc/unit |
| TB-exp | Teambition Clarity Design — 邮件/消息时间表达 | https://design.teambition.com/doc/expression |
| TB-mix | Teambition Clarity Design — 中西文混排 | https://design.teambition.com/doc/mixed |
| TB-corp | Teambition Clarity Design — 语料库 | https://design.teambition.com/doc/corpus |
| ZD-pr | Zan Design (有赞) — 基础原则 | https://design.youzan.com/strategy/principle.html |
| ZD-se | Zan Design — 语句表达 | https://design.youzan.com/strategy/sentence-expression.html |
| ZD-lib | Zan Design — 标准词汇库 | https://design.youzan.com/strategy/standard-library.html |
| ZD-pu | Zan Design — 标点符号 | https://design.youzan.com/strategy/punctuation.html |
| ZD-df | Zan Design — 数据格式 | https://design.youzan.com/strategy/data-formats.html |
| ZD-sc | Zan Design — 场景策略 | https://design.youzan.com/strategy/scenario-strategy.html |
| ZD-nm | Zan Design — 命名策略 | https://design.youzan.com/strategy/naming-strategy.html |
| SM-cg | Semi Design — Content Guidelines 文案规范 (raw markdown) | https://raw.githubusercontent.com/DouyinFE/semi-design/main/content/experience/content-guidelines/index.md |
| SM-btn / SM-toast / SM-notif / SM-banner / SM-modal / SM-empty | Semi Design component pages, section 文案规范 (raw markdown) | https://raw.githubusercontent.com/DouyinFE/semi-design/main/content/basic/button/index.md · …/feedback/toast/index.md · …/feedback/notification/index.md · …/feedback/banner/index.md · …/show/modal/index.md · …/show/empty/index.md |
| WX | 微信小程序设计指南 (最后一次编辑于 2026-04-20) | https://developers.weixin.qq.com/miniprogram/design/ |
| EP | Element Plus — 设计 | https://element-plus.org/zh-CN/guide/design.html |
| WP | WordPress China — 翻译风格指南 (updated 2024-07-03 per page) | https://cn.wordpress.org/team/handbook/translation-style-guide/ |
| MDN | MDN — 针对 MDN 文档的本地化指南 (zh-CN, raw markdown) | https://raw.githubusercontent.com/mdn/translated-content/main/docs/zh-cn/translation-guide.md |
| MZ-sumo | Mozilla — SUMO Style Guide, 中文（简体）本地化翻译须知 | https://mozilla-l10n.github.io/styleguides/zh-CN/sumo.html |
| CLREQ | W3C — Requirements for Chinese Text Layout 中文排版需求, Group Note Draft 04 November 2026 (fetch truncated at §8.3; see gaps.md) | https://www.w3.org/TR/clreq/ |
| MOE54 | 教育部令第54号《信息技术产品国家通用语言文字使用管理规定》, in force 2023-03-01 | https://hudong.moe.gov.cn/srcsite/A02/s5911/moe_621/202301/t20230113_1039278.html (www.moe.gov.cn copy unreachable) |
| GOV-TY | 国务院关于公布《通用规范汉字表》的通知, 国发〔2013〕23号 | https://www.gov.cn/zhengce/zhengceku/2013-08/19/content_1289.htm |
| GBT15834-W3C | W3C 中文新闻: "GB/T 15834-2011 Part 5: Positioning of Punctuation Mark" (English translation of Part 5, 2013-12-02) | https://www.w3.org/zh-hans/news/2013/translation-of-gb-t-15834-2011-part-5/ |
| MIIT | 工业和信息化部办公厅 工信厅信管函〔2021〕67号, with 附件1《互联网网站适老化通用设计规范》 and 附件2《移动互联网应用（APP）适老化通用设计规范》 in the page body | https://www.miit.gov.cn/jgsj/xgj/wjfb/art/2021/art_81e8b738d6b24ad6a04f7ecb3f4e0702.html |

# Half A — UX writing

## A1. Register and address

#### CN-01 Address the user as 你, not 您 (default)
- Kind: WRITE. Region: Mainland China.
- AD-cw 拉近彼此的距离: 「直接使用「你」、「我」来和用户对话，与用户建立亲密感。避免使用「您」，让用户感觉太过疏远。」
- ZD-se 1.平等沟通: 「使用第二人称“你”，不使用“您”、“亲”，与用户平等自然地交流。」 推荐 「恭喜你，审核认证通过！」 / 不推荐 「恭喜您，审核认证通过！」
- ZD-lib (标准词汇 | 不推荐用法): 「你 | 您」
- SM-cg 保持一致 (term table): 「你 | You | 您」
- TB-corp 名词: 「| 你 | 您 |」
- TB-cw 1. 平等亲和: 「非正式场合或没有明确指向性的时候，直接使用「你」「我」进行对话」
- MS 4.1.12 Pronouns: "In general, you do not have to translate every pronoun into Simplified Chinese. As long as the meaning is not affected, omit the pronouns for fluent flow of the text. If it’s needed, use "你" instead of "您.""
- MDN 代名词: 「请统一使用“你”。」 (context: "you" is not to be translated as 您)
- Test: script — flag 您 in UI strings (FYI, not BLOCK: see the exception below).
- Strength: PRAC(4/4) + L10N(2/4: MS, MDN; WP and MZ-sumo silent).
- **Exception recorded, not resolved:** TB-cw keeps 您 for very formal settings: 「如果是非常正式的场合，为了凸显用户的尊贵地位，产品需和用户有一定的距离感，表示对用户的异常尊敬等，可使用「您」。例如银行/尊贵 VIP /信息安全类场景等」. The other three company guides give no exception. MS's own sample text uses 您 once (4.1.7, bold-headings example, table cell: 「两种激活方式供您选择：」), against its own 4.1.12 rule. No government source on 你/您 was found (gaps.md); banking, government-service and other formal products are not covered by any guide read.

#### CN-02 Do not mix 你 and 我 in one sentence
- Kind: WRITE.
- AD-cw 拉近彼此的距离: 「不要在同一个句式中混用「你」和「我」，交互中指代混乱会让用户相当纠结。」
- TB-cw 区分「你」和「您」: 「不可在同一个句式中混用「你」和「我」」
- ZD-pr 3.信息指代明确: 「尽量不应在同一个句式中同时使用“你”和“我”两个人称代词。」 正确 「请在“我的设置”中修改“个人信息”」 / 错误 「请在“我的设置”修改“你的信息”」
- Test: script — one sentence containing both 你 and 我 (outside quoted UI names): flag for review.
- Strength: PRAC(3/4; Semi silent).

#### CN-03 The product calls itself 我们 sparingly; which contexts differ by source
- Kind: WRITE (judgment).
- AD-cw 明确表述立足点: 「当用户向后台反馈问题、提出建议或申诉时，使用「我们」是合理的语境，例如「我们将会审核你的申诉」。」 (Ant also centres copy on the user rather than on what 「我们」 provide.)
- MS 2.2.2 (comment on a sample): ""we" provides a more personal feel." — sample target (table cell, reassembled): 「在重启后，我们将从之前中断的地方开始继续安装。」
- Test: judgment only.
- Strength: PRAC(1/4) + L10N(1/4). **The two differ:** Ant limits 我们 to feedback/appeal contexts; Microsoft uses it in system-status text for warmth. Not resolved.

#### CN-04 No 亲, no chat-style particles or tildes; keep a formal, plain register
- Kind: WRITE.
- ZD-se 4.正式严谨: 「避免口语化表达，保持产品内容表达的专业性与严谨性。」 推荐 「报表数据已更新，请下载查看。」 / 不推荐 「亲，数据已经更新完成了，可以下载查看哦～」
- ZD-pu 2: 「文案表达需保持正式与严谨，不应使用无实质意义的聊天式标点，如“~”。」
- TB-cw 3. 表述专业严谨: 「避免使用口语和俗语」
- MS 4.1.8: "Unacceptable zh-CN colloquialisms, idioms, and network terms: 给力、山寨、亲、神马、偶、童鞋、酱紫." (神马 is split across two lines in the extract; joined.)
- Test: script — word list (亲, 哦～ from ZD-se's 不推荐 example, and the MS list) in UI strings: flag.
- Strength: PRAC(2/4) + L10N(1/4).
- Note: MS 2.1 asks for a "clear, friendly and concise" style that "resembles conversation observed in everyday settings as opposed to the formal, technical language"; MS 5.6.2 says "semi-formal and friendly". This is about tone, not slang, and does not contradict the list above.

#### CN-05 Avoid internet slang and newly coined internet words
- Kind: WRITE.
- TB-cw 2.2.避免使用网络语言: 「网络语言通用性和辨识度不够强，不是每个用户都能理解的；而且网络语言带有一定的戏谑成分，与产品的品牌，和调性可能会有冲突，应避免或谨慎使用。」
- MIIT 附件1 3.1.1: 「避免采用专业词语或网络新词语作为访问目标和结果表达。如确有必要，应在用户操作前给予必要的提示。」 (scope: age-friendly web pages)
- MS 4.1.8 (list above).
- Test: judgment only (word list can surface candidates).
- Strength: AUTH (age-friendly scope only) + PRAC(1/4) + L10N(1/4).

#### CN-06 Avoid absolute or superlative words (最好, 绝对, 一定, 绝不, 唯一)
- Kind: WRITE.
- AD-cw 表述不应过于极端: 「不要使用过于绝对的表述，这样会让用户觉得不适。」
- TB-cw 2.2: 「避免极端语气，例如“绝对”，“一定”等」
- TB-pu 5: 「描述产品时，不使用“最佳” “最好” “最著名”等具有强烈评价色彩的词语」
- ZD-se 2.谦逊克制: 「避免使用生硬的指令句式要求用户完成操作，表达不应过于极端，避免使用如“绝对”、“一定”等词汇。」
- SM-cg 避免夸大其词: 「尽量避免使用绝对词」 (examples named in the page: 最好, 绝对, 总是 — names only, per extraction)
- MS 4.1.3: "Generally, don't use "最好", "最强", "唯一", etc."
- Test: script — word list 绝对/一定/绝不/最好/最佳/最强/唯一/最著名: flag.
- Strength: PRAC(4/4) + L10N(1/4). (Whether China's Advertising Law also bears on this was not checked; gaps.md.)

#### CN-07 Do not command or blame the user
- Kind: WRITE (judgment).
- AD-cw 友好、尊重用户: 「「不能」、「不要」、「请勿」都给人命令或强迫的感觉。」 and 「如果你想留住你的用户，当出错的时候就不要责怪用户。」
- TB-cw 2.2: 「也尽量避免使用生硬的祈使句式要求用户完成某项操作。」
- ZD-se 3.尊重友好: 「使用友善、尊重的语气，不责备用户，平等积极地与用户沟通。」 推荐 「上传失败，请检查上传格式。」 / 不推荐 「操作错误，无法上传！」
- SM-cg 与用户平起平坐: 「同时，也避免用教育、指责和埋怨的语气去和用户沟通」
- MS 5.6.2: "never talk down to the users; instead, use a friendly tone."
- Test: judgment only (a word list can surface Ant's 不能/不要/请勿 for review).
- Strength: PRAC(4/4) + L10N(1/4).

#### CN-08 Apologies: 抱歉 rather than 对不起, and only when the system is at fault
- Kind: WRITE.
- AD-cw 用词精准完整 (table): 「抱歉 | 对不起 | 如果是我们系统造成的结果，可以使用「抱歉」，如果是用户自己造成的结果，不能使用。」
- TB-corp: 「| 抱歉 | 对不起 |」
- SM-cg term table: 「抱歉 | Sorry | 对不起」; and 与用户平起平坐: 「尽量避免使用请求和道歉的语气去和用户进行沟通」, 「有且只有在非常严重的情况下使用 “对不起”或者类型的抱歉语言，例如用户的信息永久性地不可逆转地被系统删除了。」
- ZD-sc 错误提示 > 说明出错原因: 正确 「试用已结束，该功能无法使用。」 / 错误 「对不起，该功能无法使用。」 (the fault here is a missing reason, not only the apology word)
- Test: script — 对不起 in UI strings: flag; 抱歉 in an error caused by user input: judgment.
- Strength: PRAC(4/4 address apologies; 3/4 prefer 抱歉 over 对不起). **Semi is internally mixed:** its term table prefers 抱歉, its tone section names 对不起 for very serious cases.

#### CN-09 Plain, everyday words; no code language or jargon
- Kind: WRITE (judgment).
- AD-cw 使用用户熟悉的语言: 「间接、暧昧模糊的说法，生僻和过于「文雅」的用词，会增加用户的认知负荷，所以应当尽量避免使用这类用户无法识别的词汇。」
- TB-cw 2.1: 「若必须使用专业词汇，可在旁边增加注释说明」
- ZD-sc 错误提示: 「使用简单通俗的用语，避免技术用语的解释与透出。」
- SM-cg 像人一样说话: 「避免使用代码语言」
- EP 设计原则: 「清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；」
- MS 3: "Use plain language. Use straightforward, concrete, and familiar words. Plain and accessible language will help people of all learning levels and abilities. Some examples include using several clear words instead of one complicated term or concept."
- MIIT 附件1 3.1.1 (CN-05).
- Test: judgment only.
- Strength: AUTH (age-friendly scope) + PRAC(4/4) + L10N(1/4).

#### CN-10 Microsoft's list of formal words to replace with everyday ones
- Kind: WRITE.
- MS 2.1.2: "Microsoft voice avoids an unnecessarily formal tone." Table (old → new): blog 日志 → 博客/微博; if 倘若/假使/假若 → 假如/如果; if you want… 若要 → 要/如果要; only 仅是 → 只是.
- MS 4.1.6 (contracted forms): but, however 但是/不过 → 但; in conclusion 总而言之 → 总之.
- MS 4.1.5: to 至 → 到 (「添加至网络」 → 「添加到网络」).
- MS 2.1.3: 「xxx名」 instead of 「xxx名称」: "Old usage: 列名称/用户名称/文件名称已存在。" / "New usage: 列名/用户名/文件名已存在。" (crosses a page break in the PDF)
- Test: script — word list.
- Strength: L10N(1/4). Microsoft only; no company guide addresses these words.

#### CN-11 Inclusive wording (Microsoft list)
- Kind: WRITE.
- MS 3: "Comply with local language laws." Use this / Not this (table): 南方人 / 蛮子; 残疾、残障人士 / 残废; 外国人 / 老外; 农村人 / 乡下人; 社会阶层 / 社会阶级; 村委会主任、村主任 / 村长; 回族 / 回回; 朝鲜 / 北朝鲜.
- MS 3.1: "Don't use gendered pronouns (她, 他, etc.) in generic references. Instead: • Rewrite to use the substitutive form (其). • Omit the pronoun (for example, the 文档 instead of 他的文档). • Refer to a person's role (读者, 员工, 顾客, or 客户, for example). • Use 人员 or 个人."
- MS 3.2: "Focus on people, not disabilities. Don't use words that imply pity, such as 患病 or 遭受痛苦." (遭受痛苦 split across two lines in the extract; joined.)
- SM-cg 具有包容性: 「不要使用描述年龄的词，如“年轻”、“老”等。」, 「不要使用黑名单或白名单」
- Test: script — word list for the MS "Not this" column and 黑名单/白名单: flag.
- Strength: PRAC(1/4) + L10N(1/4). The place-name row (朝鲜 / 北朝鲜) is Microsoft's; no other source read addresses country names.

## A2. Buttons, labels, menus, terms

#### CN-12 Button labels: verb + noun; in a dialog, the button may reuse the title's verb alone
- Kind: WRITE.
- SM-btn 文案规范: 「按钮应该总是以鼓励行动的强动词开头」; 「为了给用户提供足够的上下文，在按钮上使用 {动词}+{名词} 内容公式；除了常见的动作，如“Done”、“Close”、“Cancel”或“OK”」
- SM-modal 文案规范: 「两种模态对话框的操作按钮在保证标题描述清楚的前提下，只需要使用标题内的动词即可」
- SM-empty 动作按钮: 「使用 动词 + 名词 的格式」
- AD-cw 表述一致: 「操作的名称和目标页面标题的名称保持一致。」
- Test: script — button text containing none of the verbs in the project glossary (CN-17): FYI.
- Strength: PRAC(1/4: Semi). Ant's line is the related naming-consistency rule (CN-15), not a verb + noun rule. **Region caution:** Semi writes these rules in Chinese but every example pair is English (「Create project」 vs 「Create」). No Mainland source read gives a Chinese wrong/right button pair.

#### CN-13 No final 。 on buttons, titles, labels, tags, toasts and table cells
- Kind: WRITE.
- AD-cw 基本标点规范: 「以下情况中不使用句号：输入框下的提示；表格中的句子；句末为文字链（链接前使用句号）；按钮和标题。」
- TB-pu 1: 「以下元素单独出现时可以省略标点：」 (listed: tags, titles, input-field hints, hover hints, sentences in tables — list items per extraction, not quoted)
- ZD-pu 功能性文本 3 (no final period): 「标题、副标题、标签、轻提示（toast）。」
- SM-toast: 「句尾不使用句号」; SM-notif 标题: 「避免使用逗号，句号等标点符号」; SM-banner 标题: 「标题上尽量避免使用逗号，句号等标点符号，有且只有是疑问句的时候，支持使用问号结尾」
- Test: script — button/heading/label/toast text ending in 。: flag.
- Strength: PRAC(4/4).
- **Disagreement, hint text under a form field:** AD-cw and TB-pu omit the period there; ZD-pu requires it: 「表单输入框下的提示文本。」 (listed under 4. needs a final period). Not resolved.

#### CN-14 Multi-sentence text, body copy, and a sentence before a text link take normal punctuation
- Kind: WRITE.
- AD-cw: 「句末为文字链（链接前使用句号）」 (inside the CN-13 quote)
- TB-pu 2: 「以下元素单独出现时需要加上标点」 (listed: multi-sentence or multi-paragraph copy and lists; a sentence before a text link — per extraction)
- TB-pu 1 (bubbles): 「气泡中的内容，如果是两段话，中间用了「，」，那么结尾就需要有「。」；一段话的情况下，可以不用「。」和其他标点符号」
- ZD-pu 功能性文本 6: 「在气泡提示中，如果提示文本为非单一句式（文本中包含其他标点符号），结尾需添加标点符号。」; 1: 「疑问句、感叹句句尾，结尾需添加标点符号。」
- SM-notif / SM-banner 正文: 「使用正确的标点符号，句子内使用逗号，句子间使用句号」
- Test: script — a string that contains an internal ，or 。 but no final punctuation: flag.
- Strength: PRAC(4/4).

#### CN-15 One term per concept; the action name matches the destination title
- Kind: WRITE (judgment).
- AD-cw 表述一致: 「操作的名称和目标页面标题的名称保持一致。」
- TB-cw 4. 表述一致: 「如果出现全新的术语，应在上线同时通过气泡提示、帮助文档等方式告知用户新名词的含义」
- ZD-pr 2.产品用词一致: 「表达描述同一功能名称、术语、概念名称时，需保持统一，避免混用。」
- SM-cg 保持一致: 「团队可梳理表意相同的名词或动词，选择其一即可。」
- EP: 「在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。」
- Test: script — glossary consistency across a codebase (same English key → more than one Chinese term): flag.
- Strength: PRAC(4/4).

#### CN-16 Spelling of common UI words: 登录 (not 登陆), 账号 (not 帐号), 其他 (not 其它)
- Kind: WRITE.
- 登录: AD-cw 「登录 | 登陆 | 登记记录用户输入的注册账号和密码。」; TB-corp 「| 用户经过身份验证进入系统 | Login | 登录 | 登陆 |」; ZD-pr 1.避免错别字 正确 「登录」 / 错误 「登陆」; ZD-lib 「登录 / 登陆」; SM-cg 「登录 | Log in | 登陆、Login（仅用作名词）」
- 账号: TB-corp 「| 账号 | 帐号 |」; ZD-lib 「在有赞产品体系中，应使用“账号”。」; SM-cg 「账号 | Account | 帐号」
- 其他: AD-cw 「其他 | 其它 | 「其他」的应用范围更广」; TB-corp 「| 其他 | 其它 |」; SM-cg 「其他 | Other | 其它」
- Also ZD-lib: 「模板 / 模版」, 「阈值 / 阀值」 (标准词汇 / 不推荐用法).
- Test: script — 登陆, 帐号, 其它, 模版, 阀值 in UI strings: flag.
- Strength: PRAC(4/4 for 登录; 3/4 for 账号; 3/4 for 其他). These are orthography choices made by Mainland companies; no dictionary or 国家语委 list on these words was opened (gaps.md).

#### CN-17 Action verbs: 新建 / 添加, 删除 / 移除, 启用 / 停用 and others — where the glossaries agree and where they do not
- Kind: WRITE.
- Create → 新建: TB-corp 「| 从无到有新建一个对象，且该过程需要一系列的输入或配置 | Create | 新建 | 创建、添加、新增 |」; SM-cg 「新建 | Create | 创建」; ZD-lib 「新建 / 新增」.
- Add → 添加: SM-cg 「添加 | Add | 新增」; ZD-lib: 「把已有对象添加到一个集合之中，如：添加联系人。」
- Delete / Remove: TB-corp Delete → 删除 (object destroyed), Remove → 移除 (「将对象从当前场景中移除，但对象本身并没有被破坏或销毁」); ZD-lib: 「“永久性”地去除操作对象，操作对象一般在系统中不再存在。」 (删除); SM-cg 「删除 | Delete | 清除」, 「移除 | Remove | |」.
- Enable / Disable: TB-corp 启用 (not 开启、开始使用), 停用 (not 禁用、关闭、关掉); SM-cg 「启用 | Enable | 开启、开始使用」, 「停用 | Disable | 暂停、停止使用」.
- Clear → 清空 (TB-corp, not 清除); Apply → 应用 (TB-corp; ZD-lib 「在不关闭当前操作流程的前提下，使配置即时生效。」); Reset → 重置, Restore → 还原 (TB-corp).
- **Disagreement, OK button:** TB-corp maps OK → 确认, not 确定: 「| 确认当前操作并关闭当前窗口 | OK | 确认 | 确定 |」. ZD-lib keeps both and splits them by what follows: 「使用时需跟动作，如：确认删除。」 (确认), with 确定 used without a following action (per extraction). Not resolved.
- Microsoft (software terms, MS 2.1.3): 「Use 应用for "app." Use 应用程序 for "application."」 (spacing as in the PDF); PC → 电脑; computer → 计算机; "Use 选择 for "select." Use 选取 for "pick.""; USB flash drive → U盘 ("Don’t use "USB 闪存驱动器.""); maximum/minimum [limits] → 上限/下限.
- Test: script — per-project glossary check (not a universal list; the guides differ).
- Strength: PRAC(3/4 have a verb glossary: Teambition, Zan, Semi; agree on 新建 for Create, 删除/移除 split, 启用/停用) + L10N(1/4) for the Microsoft terms.

#### CN-18 Status sentences: noun + verb + result (「文件上传成功」), active, no 被
- Kind: WRITE.
- TB-corp 句式统一: 「| 文件上传成功 | 上传文件成功成功上传文件 |」 (recommended | not recommended, the second cell holds two items run together) and 「备注：需统一句式保证认知解读体验一致。」
- ZD-se 1.语序表达: 「语序表达推荐使用“名词 + 动词 + 状语”，简化表达。」 Examples 「商品发布成功」 and 「成功发布商品」 — two fetches returned their 推荐/不推荐 labels in opposite order, so the pair is not cited; the rule text itself favours the noun-first form, as does ZD-pr's stable pair below.
- ZD-pr 1.句式语态统一: 「统一句式，不使用被动语态，简化表达，便于用户理解语义。」 正确 「商品发布成功」 / 错误 「商品已被成功发布」
- SM-toast: 「使用 名词 + 动词 的格式进行说明」 (examples English)
- TB-cw 4 (active voice): 「产品体验以用户为中心，UI 文案要始终以用户为主体」; its recommended example (per extraction) 「成功创建「设计系统」项目」 over 「「设计系统」项目已被成功创建」 — this puts the verb first, which differs from TB-corp's own noun-first pattern; both pages agree only on avoiding 被.
- Test: script — 被 in status/toast strings: flag; word order: judgment.
- Strength: PRAC(3/4: Teambition, Zan, Semi).

#### CN-19 Do not repeat what the user already knows
- Kind: WRITE (judgment).
- ZD-pr 1.精简信息: 「在信息准确完整表达的前提下，不重复表达用户已知信息。」 正确 「修改成功」 / 错误 「修改门店信息成功」
- TB-cw 1. 简洁有效: 「省略多余无用的词汇，不重复用户已知信息」
- AD-cw 精简语句: 「省略无用词汇，不重复用户已知事实；在绝大多数交互场景下，都无需界面描述出全部的细节。」
- SM-cg 简洁清晰: 「只需要提供给用户必要的信息，省略多余的不必要的废话。」
- Test: judgment only.
- Strength: PRAC(4/4).

#### CN-20 UI element names quoted in running text: “ ” (Microsoft) or bold (Semi); path levels joined with “ - ” (Zan)
- Kind: WRITE.
- MS 4.1.7: "b. When localizing UI terms within software messages/descriptions, please enclose UI terms with double byte double quotation marks (“”)." Example (table cell): 「单击“文件”选项卡。」
- ZD-df 2.功能路径: 「使用时用“-”间隔不同层级功能，如：请在“订单 - 交易查询 - 订单查询”中进行查看。」
- SM-cg UI 元素: 「当文案指代产品中其他的 UI 元素时，需要加粗该文案。」 (Semi says to avoid quotation marks unless bold is unavailable — per extraction summary.)
- Test: script — a known UI label name appearing in a sentence without “”: FYI.
- Strength: PRAC(2/4) + L10N(1/4). **Disagreement:** Microsoft quotes with “”, Semi bolds. Not resolved.

#### CN-21 Version numbers: digits only, no V prefix (Zan); 「版本 4.2」 (Microsoft)
- Kind: WRITE.
- ZD-df 1.版本号: 「仅使用数字表示版本号即可，无需添加其他信息。」 正确 「当前版本为 4.43.0」 / 错误 「当前版本为 V4.43.0」
- MS 5.2: "Version 4.2" → 「版本 4.2」
- Test: script — /V\d+\.\d/ next to CJK: FYI.
- Strength: PRAC(1/4) + L10N(1/4).

#### CN-22 Ongoing actions: 正在… (Microsoft) versus …中 (Teambition, Zan)
- Kind: WRITE.
- MS 4.1.15: "Continuous operations are usually expressed in English with a gerund, which should be translated into Simplified Chinese with the pattern 正在..." and (table) "Uploading… 正在上载… — Though "中" could be used, it is less fluent and might cause confusion in some cases."
- TB-corp 句式统一 (recommended): 「数据加载中，请稍候」
- ZD-lib 动词: 「表示“请稍微等候”，后不接动作，如：数据加载中，请稍候。」
- Test: judgment only.
- Strength: L10N(1/4) for 正在…; PRAC(2/4) use …中 in their own recommended examples (not stated as a rule). **Disagreement recorded, not resolved.** Microsoft's term 上载 is its own term choice; no other source read uses it.

#### CN-23 请稍候 (wait, nothing follows) vs 请稍后 (later, an action follows)
- Kind: WRITE.
- ZD-lib: 「表示“请稍微等候”，后不接动作，如：数据加载中，请稍候。」 and 「表示“请稍微延后”，后接动作，如：请稍后重试。」
- Test: script — 请稍后 at end of string (no following verb): flag; 请稍候 followed by a verb: flag.
- Strength: PRAC(1/4). Single source.

#### CN-24 Use a specific measure word, not 个 by default
- Kind: WRITE.
- MS 4.1.10: "Don’t always use the general 个 and try to use specific ones to improve readability." Preferred 「两位研究人员」 / Avoid 「2 个研究人员」.
- MS 5.5.2: "1. "Measure word", such as 位, 部, 本, 个, is needed if the placeholder means <number>." Example (table cell): 「%d 位用户在线。」
- Test: judgment only.
- Strength: L10N(1/4).

#### CN-25 Short forms over full sentences for lead-ins (Microsoft)
- Kind: WRITE.
- MS 4.1.14: "For the Microsoft voice, use of sentence fragments helps convey a conversational tone. They are used whenever possible as they are short and to the point." Long form → fragment: 「请执行以下步骤：」 → 「步骤如下：」; 「请参阅下面的图像：」 → 「如图所示：」.
- Test: judgment only.
- Strength: L10N(1/4).

## A3. Error, confirmation, success, loading and empty messages

#### CN-26 Error messages say what happened and what to do next
- Kind: WRITE.
- ZD-sc 错误提示: 「告诉用户错误原因，而不是仅告知错误事实。」 and 「明确简洁地告诉用户如何解决问题，不要做过多解释说明。」 正确 「上传失败，请上传 2M 以内的图片。」 / 错误 「上传失败，请检查上传图片，将图片大小控制在 2M 以内，重新上传。」
- ZD-se 2.句式结构: 「优先陈述事实，告诉用户发生了什么。」 and 「后半部分引导操作，给出用户解决问题的方法。」 推荐 「上传失败，请先清理图片空间。」 / 不推荐 「上传失败」
- TB-corp (陈述事实（前半句）+ 引导操作（后半句）): 推荐 「网络出错，查看诊断详情」 / 不推荐 「查看网络出错的诊断详情」
- AD-cw 完整、直接地阐述信息: 「用户需要知道在出现问题的情况下如何进行下一步操作。」
- SM-cg 同情的: 「我们希望可以直接了当的展示问题，并告知解决方案（不建议用道歉 sorry 语气）。」 Example: 「URL 不可用。可联系站点管理员帮助解决。」
- WX 异常状态——表单出错: 「在表单顶部告知错误原因，并标识出错误字段提示用户修改。」
- MS 5.5.2: "Considering the underlying principles of Microsoft voice, translators are encouraged to apply them to ensure target translation is more natural, empathetic and not robot-like." Example (table cell): 「密码有误，请再试一次。密码需区分大小写。」
- Test: judgment only (script can flag an error string that ends in 失败 with nothing after it).
- Strength: PRAC(4/4) + WX + L10N(1/4).

#### CN-27 失败 versus 无法 — sources differ
- Kind: WRITE.
- AD-cw: 「相对于「失败」，「无法完成」是更加客观的结果，更容易让用户在心理上接受。」
- MS 5.5.2 standard phrases (table): Cannot find / Could not find / Unable to find / Unable to locate → 「无法...」, e.g. Target: 「无法删除文件。」; Not enough memory → 「内存不足」, e.g. 「内存不足，无法处理这个命令。」
- Against: ZD-se, ZD-sc and TB-corp use 「上传失败」, 「数据加载失败」 in their own recommended examples (CN-26).
- Test: judgment only.
- Strength: PRAC(1/4) + L10N(1/4) for 无法; **the other two company guides use 失败 in their recommended copy.** Not resolved.

#### CN-28 No technical codes or system words in user-facing errors
- Kind: WRITE.
- ZD-sc 错误提示 > 避免技术用语: 正确 「网络连接断开，请检查网络设置。」 / 错误 「请求失败，通用网络错误，错误编号 500。」
- SM-cg: 「避免使用代码语言」
- Test: script — error strings with HTTP status numbers, exception class names, or "error code" patterns: flag.
- Strength: PRAC(2/4).

#### CN-29 Confirmation dialogs: say what changed, then ask; title verb + noun; button reuses the verb
- Kind: WRITE.
- TB-corp: 推荐 「你已修改了任务内容，确定放弃并返回吗？」 / 不推荐 「确定放弃未保存的修改内容并返回吗？」
- SM-modal: 「命令式 Modal 与 默认 Modal 两种模态对话框的标题使用 动词 + 名词 的格式，无论是陈述句还是问句」 (examples English: 「Delete form？」 vs 「Are you sure you want to delete form?」); body: 「对标题进行具体的解释说明，不要重复标题的信息」, 「确保用户知道在必要时如何采取行动」
- ZD-lib: 「使用时需跟动作，如：确认删除。」
- Test: judgment only.
- Strength: PRAC(3/4).

#### CN-30 Success toasts: short, no final period; icon toasts only for light success, never for errors (WeChat)
- Kind: WRITE + behaviour.
- WX 图标型弹出提示: 「图标型弹出提示适用于轻量级的成功提示，1.5秒后自动消失，并不打断流程」 and 「特别注意该形式不适用于错误提示，因为错误提示需明确告知用户」
- SM-toast: 「保持简洁」, 「句尾不使用句号」, 「只提供一个动作」, 「不使用类似于「已读」类的动作，例如 OK, Got it, Dismiss, Cancel」
- ZD-pu: toasts take no final period (CN-13).
- Test: script — toast text ending in 。: flag; error message rendered with a success-style toast: judgment.
- Strength: PRAC(2/4) + WX. WeChat's rule is scoped to Mini Programs.

#### CN-31 Empty states: give the reason or the next step; don't repeat the title; empty data shown as 「--」 (Ant)
- Kind: WRITE.
- SM-empty: 「可以展示展示空状态的具体原因，也可以展示后续的操作行为去帮助用户消除空状态」, 「不要重复标题上的内容」, 「尽量保持正文在 1-2 句话内」
- TB-corp: 推荐 「搜索无结果」 / 不推荐 「啥也没搜到搜索失败搜索为空」 (three items run together in one cell)
- AD-df 数据状态 > 无数据: 「无数据用 `--` 表述。」
- Test: script — empty table cells rendered as blank, 0 or N/A where the project follows Ant: FYI.
- Strength: PRAC(3 guides speak, each to a different point: Semi states content rules; Ant states the 「--」 placeholder; Teambition gives one example only). Count each point as 1/4.

#### CN-32 Exclamation marks: avoid
- Kind: WRITE.
- AD-cw 谨慎使用感叹号: 「感叹号会让文案显得过于激动，容易让气氛变得过于紧张。」 and 「当向用户表达问候或祝贺时，使用「！」是合理的语境，例如「欢迎回到社区！」。」
- TB-pu 3: 「感叹号用于表达强烈的情感，让文案显得过于感情化，容易让气氛变得过于激动和紧张，不推荐使用。」
- ZD-pu 2: 「文案表达需保持平和与冷静，需克制或尽量不使用叹号“！”。」
- SM-cg 标点符号: 「尽量避免使用感叹号，除非真的是非常令人兴奋的事情。」 (this section of Semi appears to address English copy; see CN-35)
- Test: script — ！ or ! in UI strings: flag (FYI in marketing copy).
- Strength: PRAC(4/4; 3/4 if Semi's line is read as English-only).
- Note: ZD-se's own 推荐 example 「恭喜你，审核认证通过！」 ends in ！ (a congratulation, consistent with Ant's exception).

#### CN-33 Emoji: avoid in product copy
- Kind: WRITE.
- SM-cg 表情: 「避免使用 emoji，选择用 icon 代替；如必须使用，可放在句段结尾。」
- Test: script — emoji code points in UI strings: FYI.
- Strength: PRAC(1/4).

## A4. Characters and Taiwan/Mainland terminology

#### CN-34 Use standard Simplified characters (规范汉字) per 《通用规范汉字表》; traditional and variant characters only where the law allows
- Kind: WRITE (TYPO-checkable for character set).
- GOV-TY: 「《通用规范汉字表》公布后，社会一般应用领域的汉字使用应以《通用规范汉字表》为准，原有相关字表停止使用。」 (国发〔2013〕23号)
- MOE54 第六条: 「第六条 数字和网络出版物使用国家通用语言文字，应当符合汉语拼音、普通话语音、规范汉字、现代汉语词形、标点符号和数字用法等语言文字规范标准。」 and 「需要使用汉语方言、繁体字、异体字的，应当符合《中华人民共和国国家通用语言文字法》相关规定。」
- MOE54 第二条 scope: 「第二条 在中华人民共和国境内生产、销售、出版、发布、推广对国家通用语言文字进行信息化处理和使用国家通用语言文字进行内容编辑的信息技术产品，适用本规定。」; the products listed are 「（一）基础软件，包括字库、输入系统、操作系统、数据库系统、办公套件等；」, 「（二）语言文字智能处理软件，包括语音合成、语音转写、机器翻译、智能写作、智能校对、自动问答等功能软件；」, 「（三）数字和网络出版物。」
- Test: script — traditional-only code points in a zh-CN bundle (via a simplified/traditional mapping): flag.
- Strength: LAW (State Council notice; ministerial order). **Scope caution:** Order 54 names basic software, language-processing software and 数字和网络出版物; whether an ordinary app or website UI is a 数字和网络出版物 is not defined on the page read. The law it refers to (国家通用语言文字法) was not opened (gaps.md).

#### CN-35 Do not convert Taiwan or Hong Kong strings mechanically
- Kind: WRITE.
- WP 全局要求: 「繁体中文（zh_TW、zh_HK）的译文仅供参考，禁止直接复制转换。」
- Test: judgment only (a script can flag zh-CN strings identical to zh-TW strings after character conversion, as candidates).
- Strength: L10N(1/4).
- **Terminology gap:** no Mainland authority or published Mainland glossary listing Taiwan/Mainland software-term pairs could be opened (术语在线 is client-rendered; see gaps.md). The skill should not ship a Taiwan→Mainland term table from this pass. Microsoft's term choices (CN-17) are Mainland choices but are not framed against Taiwan usage.

#### CN-36 Inside Semi's guide, English-copy rules sit next to Chinese ones; do not apply them to Chinese
- Kind: process note (not a rule).
- SM-cg covers Sentence case, Title case, articles, contractions and 「不要使用分号」 / colon capitalisation; SM-btn: 「始终按句子大小写（Sentence case）原则书写」. These concern English UI text. Recorded so the skill does not read them as Chinese rules.
- Strength: n/a.

## A5. Punctuation in UI

#### CN-37 Full-width Chinese punctuation in Chinese text — and Microsoft's half-width exception for software strings
- Kind: WRITE (script-checkable).
- WP 使用全角中文标点 (heading; example labelled 正确): 「嗨！你知道嘛？今天前台的小妹跟我说「喵」了哎！核磁共振成像（NMRI）是什么原理都不知道？JFGI！」
- MDN 标点符号: 「请将英文（半角）符号替换成中文（大部分为全角）符号。」
- MZ-sumo 标点符号: 「使用中文标准全角标点符号，详见 GB/T15834—2011《标点符号用法》。」
- CLREQ 1.2: punctuation marks, like Hanzi, "are squares with the ratio of 1:1, and are seamlessly arranged with one another" (general, not region-specific)
- **Microsoft, two sets (4.1.13):** "In Simplified Chinese, there are two sets of conventions for localization of Software and Documentation. Refer to the following tables and use the correct set of punctuations: Half-width punctuations or Full-width punctuations."
  - Software set (table): half-width `:` U+003A, `!` U+0021, `?` U+003F, `()` U+0028/U+0029, `<>`, `[]`, `…` U+2026, `-` U+002D; full-width `，` U+FF0C, `；` U+FF1B, `。` U+3002, `、` U+3001, `《》` U+300A/U+300B.
  - Documentation set (table): half-width `[]`, `/`, backslash U+005C, `-`, `…` U+2026; full-width `，` `。` `、` `《》` `“”` (U+201C/U+201D) `：` U+FF1A `；` `！` U+FF01 `？` U+FF1F.
  - Colon, software: "Software localization: Use English colon (:) in Software localization. A single byte space should be left between the English colon and the subsequent characters (Chinese full- width punctuation marks are excluded)." Example: 「错误: %1」. Documentation: "Document localization: Use double byte colon (：) in Document localization. There is no space between the double byte colon and the subsequent characters."
  - Question mark, software: "Software localization: Use English Question Mark (?) in Software localization. A single byte space should be left between the English Question Mark and the subsequent characters." Documentation: "Document localization: Use double byte Question Mark (？) in Document localization. There is no space between the double byte Question Mark and the subsequent characters."
  - Exclamation, software: "Software localization: Use English Exclamatory mark (!) in Software localization. A single byte space should be left between the English Exclamatory mark and the subsequent characters." Documentation: "Document localization: Use double byte Exclamatory mark (！) in Document localization. There is no space between the double byte exclamatory mark and the subsequent characters."
  - Parentheses, software: "Software localization: Use English parentheses ( ) in Software localization. There is no space between the parentheses and the Simplified Chinese characters outside of them. A single byte space should be left between the parentheses and the English characters/number outside of them." Documentation: "Document localization: Use double byte parentheses （） if the texts surrounded by the parentheses include double byte characters. There is no space between the double byte parentheses and the text outside of them. Single byte parentheses ( ) should be used if the texts surrounded by the parentheses are single byte characters and/or number. A single byte space should be left between the single byte parentheses and the text outside of them."
- Test: script — ASCII , . ; : ? ! ( ) adjacent to CJK in zh-CN strings: flag (FYI if the project follows Microsoft's software convention).
- Strength: L10N(3/4: WP, MDN, MZ-sumo) for full-width throughout; company guides use full-width in all their examples but none of the four states the rule on the pages read (Ant's typography page reportedly does — search snippet only, not opened). **Disagreement:** Microsoft's software set uses half-width : ! ? ( ) followed by a space. Not resolved.

#### CN-38 The enumeration comma 、 between parallel items; a comma (not 、) after 首先 / 第一
- Kind: WRITE.
- MS 4.1.13 Comma: "Chinese comma (，) is used in both software and document localization. Note comma is used when enumerating several items in English while pause symbol (、) is used in Simplified Chinese." Example (table cell): 「获取你特别喜爱的最新版应用，例如 Word、Excel 和 PowerPoint，外加 1 TB 的 OneDrive 云存储空间。」
- MDN: 「并列的词语间应使用顿号而非逗号：」
- TB-pu 5: 「“首先”“其次”“第一”等序次语后面，用逗号，不用顿号」 推荐 「第一，我们要...第二，我们要...第三，我们还要...」
- TB-pu 5: 「如果书名号、引号连续使用，则中间不用其他标点符号。」 推荐 「《安全法》《交通法》《交通法》我们都要遵守」 / 不推荐 「《安全法》、《交通法》、《交通法》我们都要遵守」
- Test: script — ASCII or full-width comma between short CJK list items: FYI; 、 between consecutive 《》 or “”: flag.
- Strength: PRAC(1/4) + L10N(2/4). These read as restatements of GB/T 15834, which was not opened.

#### CN-39 Quotation marks: “ ” then ‘ ’ (CLREQ Mainland, Microsoft) — or corner brackets 「 」 (WordPress China, Teambition)
- Kind: WRITE.
- CLREQ 5.2 (Mainland): "Chinese Mainland will apply double quotation marks first, followed by single quotation marks"; "In horizontal writing, quotation marks are usually used. But in vertical writing, use corner brackets instead." (Taiwan, same section: "Taiwan will apply single quotation marks first, followed by double quotation marks" — Taiwan only.)
- MS 4.1.13: "Document localization: Double byte quotation marks should be used in Document localization." and "Note: Single quotation marks should be used within double quotation marks." Example: 「请查阅第一章的“运行 Setup 出问题时查阅‘诊断和解决问题’一章”的内容。」 (U+201C/U+201D outside, U+2018/U+2019 inside). Software strings: "Software localization: Double byte quotation marks should be used if the texts surrounded by the quotation marks include double byte characters and/or tag(s); Single byte quotation marks should be used if the texts surrounded by the quotation marks are Single byte characters, and a single byte space should be left between the single byte quotation marks and the text (Chinese full-width punctuation marks are excluded) outside of them."
- ZD-pu / ZD-pr / TB-pu use “ ” in all their own examples (e.g. ZD-pr 「请在“我的设置”中修改“个人信息”」).
- **Against:** WP heading 「简体中文使用直角引号」 (WP lists 中文文案排版指北, a community GitHub guide, under 参考文献; TB-mix uses near-identical example sentences without credit, so WP and TB-mix may be one voice on this point), 用法: 「「老师，『有条不紊』的『紊』是什么意思？」」. TB-mix (中西文混排) recommends 「我们询问了多位管理者，远程协同想要保持高效，什么最重要？几乎所有人都提到了「任务管理」。」 over 「我们询问了多位管理者，远程协同想要保持高效，什么最重要？几乎所有人都提到了“任务管理”。」 — while TB-pu, on the same site, writes its rules with “ ”.
- Test: script — mixed use of “” and 「」 within one zh-CN bundle: flag; which to require is a project choice.
- GBT15834-W3C 5.1.3 lists the opening and closing quotation marks as "(U+2018, U+201C)" and "(U+2019, U+201D)" — the curly forms; corner brackets are not in its horizontal list.
- Strength: STD-tr (by the code points listed) + W3C + L10N(1/4: MS) + PRAC(examples only) for “ ”; L10N(1/4: WP) + PRAC(1/4, internally inconsistent; possibly the same upstream as WP) for 「」. **Recorded as a disagreement; the standard side is stronger.**

#### CN-40 Quotation and end punctuation: inside the closing mark for a full quoted sentence, outside for a quoted part
- Kind: WRITE.
- TB-pu 6: 「凡是把引语作为完整独立的话来用，标点放在引号之内」 推荐 「爱因斯坦说：“想象力比知识更重要，因为知识是有限的。”」 / 不推荐 「爱因斯坦说：“想象力比知识更重要，因为知识是有限的”。」; 「凡是把引语作为作者的话的一个组成部分，标点放在引号之外」
- Test: judgment only.
- Strength: PRAC(1/4). Reads as a restatement of GB/T 15834 (not opened).

#### CN-41 Ellipsis: six dots over two character widths (CLREQ) — or a single half-width … (Ant), or ... (Microsoft prose)
- Kind: WRITE + TYPO.
- CLREQ 5.4.1 (no region named): the ellipsis "consists of six dots, takes up the space of two Hanzi characters"; "This is normally achieved using two U+2026 HORIZONTAL ELLIPSIS characters, side-by-side."
- AD-cw 基本标点规范: 「使用半角的「…」为省略号。」 (code point not verified)
- MS 4.1.13 Ellipses: "English (...) is used in both software and document localization. Some software projects might require to use double-byte dots (···) to make the ellipsis more visible." — the prose says English "(...)" (three U+002E), but the example target 「正在上载…」 uses one U+2026; the "double-byte dots (···)" are U+00B7 ×3 in the extract.
- Test: script — in zh-CN strings, count U+2026 runs and "..." : flag "..." and single … if the project follows CLREQ; flag …… if it follows Ant. Project choice.
- GBT15834-W3C 5.1.5: "A double ellipsis(U+2026) should carry two em space." and "A double ellipsis could not be separated into 2 parts nor to be the start and the end of a line at the same time."
- Strength: STD-tr + W3C for two U+2026 (two em) vs PRAC(1/4) single … vs L10N(1/4) "...". **Recorded as a disagreement.**

#### CN-42 Dash: a two-em dash (CLREQ) — Microsoft says do not use an em dash in Chinese
- Kind: WRITE + TYPO.
- CLREQ 5.1 item 6: "the two-em dash should be centered in the character frame, and have a width of 2 em" (no region named)
- MS 4.1.13 Em Dash: "The em dash (—) is used to emphasize an isolated element or introduce an element that is not essential to the meaning conveyed by the sentence. In Chinese, it should not be used as it looks the same as the Chinese character for "one" (一). Oftentimes, there is no need for such punctuation through rephrasing. If punctuation is needed, you may want to use ( ), ：or en dash to emphasize the element."
- Test: script — single U+2014 in zh-CN strings: flag (either way, a lone — is wrong for CLREQ and for Microsoft).
- GBT15834-W3C 5.1.4: "A double dash(U+2014) is between the two corresponding words, and carry two em space." and "It should be aligned to the vertical center of the corresponding base character,"
- Strength: STD-tr + W3C (two-em dash) vs L10N(1/4) (avoid). **Disagreement on whether to use the dash at all; agreement that a single — is not the Chinese dash.**

#### CN-43 Ranges and connectors: ~, 至, - or -- — the sources differ
- Kind: WRITE.
- AD-df 绝对时间: 「在日期或时间范围之间显示一个波浪号 （前后需要空格）。」
- SM-cg 时间范围: 「由于时间中已有“-” 为表区分，统一使用“~”。」 Example 「2020-02-06 ~ 2020-02-08」
- ZD-df 3.时间范围与区间: 「日期或时间中带有分隔符“-”时，用“至”作为连接符表达范围与区间。」 正确 「2018-12-12 至 2018-12-14」 / 错误 「2018-12-12 - 2018-12-14」; and 「日期或时间中不带分隔符“-”时，用“-”作为连接符表达范围与区间。」 正确 「2018年12月12日 - 2018年12月14日」 / 错误 「2018年12月12日 至 2018年12月14日」 (narrow pass; a broad pass had the labels reversed)
- ZD-df 5.数值范围: 「表达数值范围时，使用“-”进行连接，单位跟在第二个数值之后，如：400-500 件。」
- TB-pu 2: 「表达一个百分比的区间时，前后数字都要加百分号，中间用“-”链接」 推荐 「30%-50%」
- TB-exp: 「起始时间：2019-07-23--2019-08-23」
- MS 4.1.13 Wave dash: "The wave dash is used to separate alternatives or approximates." Examples 「10 ~ 20%」, 「1 ~ 10MB」, 「1KB ~ 10MB」 (all U+007E with spaces): "When the two numbers use the same unit, the second number should be followed by a unit." (table cell, reassembled)
- AD-cw 基本标点规范: 「不使用中文全角的连接号。如：2012-11-12。」
- GBT15834-W3C 5.1.6: "The en dash of hyphens(U+2013) is a little shorter than the Chinese character "one" and should carry half an em space;" / "the dash of the hyphens(U+2010) is a little longer than the Chinese character "one" and should carry one em space;" / "the wave dash(U+301C) of the hyphens should carry one em space." — the standard's wave connector is U+301C (one em), not the ASCII ~ U+007E in Microsoft's examples.
- CLREQ 5.1 item 8 (Mainland): "there are three types of connector marks, namely, the short connector mark" (短横线, 一字线, 浪纹线), and the short one "should take half the width of the long connector mark".
- Test: script — within one bundle, ranges written more than one way: flag; which form to require is a project choice.
- Strength: PRAC(4/4 address it; they disagree) + L10N(1/4) + W3C. **Not resolved.** Also not resolved: whether % repeats on both ends (TB-pu 「30%-50%」) or not (MS 「10 ~ 20%」). GB/T 15835 (which reportedly allows ~ and 一字线 for ranges — search snippet only) not opened.

#### CN-44 Book-title marks 《》 for Chinese titles; English titles inside Chinese text — sources differ
- Kind: WRITE.
- MS 4.1.7 / 4.1.13: "Use book title marks 《》 for a Chinese Book title. This is also applicable for other titles, such as online guide, manual, magazine, etc." Example: 「请参阅《Intune 设置部署指南》。」 (from the table; the Chinese guide title is a translation)
- CLREQ 5.2 (Mainland): "the names of books as well as chapters should be quoted using double angle brackets" (Taiwan differs: same section.)
- **Against for English titles:** WP: 「例外：中文句子内夹有英文书籍名、报刊名时，不应借用中文书名号，应以英文斜体表示。」 TB-mix recommends the opposite for an English book name: 推荐 「推荐你阅读《Hackers & Painters: Big Ideas from the Computer Age》，非常的有趣。」
- Test: judgment only.
- Strength: W3C + L10N(1/4) for 《》 on Chinese titles. English titles: L10N(1/4) italics vs PRAC(1/4) 《》. Not resolved. (WP and TB-mix share example sentences here, yet disagree.)

#### CN-45 Numbered items: 「1.」 and （一） without extra punctuation (Teambition, Zan)
- Kind: WRITE.
- TB-pu 1: 「序号如果加括号如（一），后面则不再加其他标点符号。」
- TB-pu 7: 「序列号后的标点要使用实心句号 "."，不要使用逗号“，”」
- ZD-df 3.包含序号的文本: 「序号使用“阿拉伯数字”加“.”表示，陈述点以分号结尾，最后一个陈述点以句号结尾。」 正确 「1.文本信息；」「2.文本信息；」「3.文本信息。」 / 错误 「1：文本信息；」…
- Test: script — list items starting `\d+[，、：]`: flag.
- Strength: PRAC(2/4). GB/T 15834 (not opened) may govern 序次语 punctuation; not checked.

#### CN-46 Do not repeat punctuation marks (！！, ？？)
- Kind: WRITE.
- WP 不重复使用标点符号: 「虽然中国大陆的标点符号用法允许重复使用标点符号，但是这么做会破坏句子的美观性。」
- Test: script — /[！？。，]{2,}/ and /[!?]{2,}/: flag.
- Strength: L10N(1/4). WordPress itself notes that Mainland usage permits repetition; this is a style choice, not a standard.

#### CN-47 No space between a full-width punctuation mark and what follows or precedes it
- Kind: TYPO (string check).
- WP 全角标点与其他字符之间不加空格 (example): 「刚刚买了一部 iPhone，好开心！」
- TB-mix: 推荐 「刚刚注册了 Teambition，好开心！」 / 不推荐 「刚刚注册了 Teambition ，好开心！」, 「刚刚注册了 Teambition， 好开心！」
- MZ-sumo: 「文字与标点符号之间不要留空格。」
- MDN: no space between Latin text and Chinese punctuation (per extraction summary; the narrow quote was 「请在中文和拉丁语系文字之间保留**一个空格**」).
- Test: script — / [，。、；：？！）》」』]/ and /[（《「『] /: flag.
- Strength: PRAC(1/4) + L10N(3/4). WP and TB-mix may share an upstream (see CN-39).

## A6. Numbers, dates, time, currency, units

#### CN-48 Arabic numerals for counts, measurements, statistics, money and Gregorian dates
- Kind: WRITE.
- ZD-pr 3.数据格式一致: 「使用数字进行计量、编号时，为达到醒目的效果，需使用阿拉伯数字。」 正确 「你有 3 条系统通知」 / 错误 「你有三条系统通知」
- AD-cw 统计数据使用阿拉伯数字: 「这也是常见问题，用户对于数字的感知速度更快，使用数字而非文字表述会更加有效。」
- TB-unit 1: 「物理量值必须要用阿拉伯数字，例如高度、质量、重量、温度、电量 等。」; 「计数、计量及统计表中的数值、正负数及小数、百分比、分数、比例等也必须采用阿拉伯数字」; 「采用公元表示的世纪、年月日时刻」 (listed under must-use-Arabic)
- MS 4.1.10: "When numeral is used with measurement units, it should be written in number."
- MZ-sumo: 「日期、版本号请使用阿拉伯数字。」
- Test: script — Chinese numerals 一二三…十百千 directly before a measure word or unit in UI strings: FYI.
- Strength: PRAC(3/4) + L10N(2/4). TB-unit's lists read as a restatement of GB/T 15835 (not opened).

#### CN-49 Where Chinese numerals are required (Teambition's list)
- Kind: WRITE.
- TB-unit 2: 「相邻两个数字并列使用，必须使用汉字。」; also listed: 「涉及到数字的专有名词」, 「成语、惯用语、缩略语」, 「特定的事件、节日和特殊意义的词组」, 「中国的干支纪年方式和夏历月日」
- Test: judgment only.
- Strength: PRAC(1/4). Very likely drawn from GB/T 15835 (not opened); confirm there before shipping.

#### CN-50 Digit grouping: comma every three digits — always (Ant, Semi) or only in data/finance modules (Zan)
- Kind: WRITE (script-checkable).
- AD-df 数值: 「千分位 | 默认使用千分位帮助用户阅读。 | 123,220」
- SM-cg 数字: 「如果数字为四位数及更多时，使用逗号隔开」
- ZD-df 1.千分符使用: 「一般数据不需使用千分符。」, 「在数据、资产、财务等以数据为主的业务模块中应使用千分符。」 and 「在数据统计模块，单独的数值显示应使用千分符。」
- TB-pu / TB-unit examples write 「今日参会人员 8374 人」 without a separator (example only).
- Test: script — numbers ≥ 10000 without separators in data tables: FYI per project choice. (`Intl.NumberFormat('zh-CN')` output was not checked in this pass.)
- Strength: PRAC(3/4 address it; 2 always, 1 data-only). Not resolved.

#### CN-51 Large numbers: 万 and 亿; whether 千 / K / W may be used — sources differ
- Kind: WRITE.
- AD-df 大额计量: 「如果一个数值很大，那么数值中的“万”“亿”单位可采用汉字。」 and (image description) 「“千”不能以单位的形式展示。」
- TB-unit 3: 「当数字的尾数出现多个 “0” 的时候（5 位数或以上），要以“万”、“亿”为单位」 统一使用 「12.6 万个」 / 错误使用 「12 万 6 千个」
- ZD-df 4.数值转换: 「如 1000 可写成 1K 或 1 千，10000 可写成 1W 或 1 万。」 and 「消费者端看到的商品销量为“411111”，可转换为“41 万”。」
- Test: script — 千 used as a unit after digits: flag if the project follows Ant; \d+W: FYI.
- Strength: PRAC(3/4) for 万/亿. **On 千, K and W: Ant says no 千; Zan allows 1K, 1 千, 1W.** Not resolved.

#### CN-52 Currency: ¥ before the number in compact UI, 元 in sentences; CNY code (Ant) — and decimals
- Kind: WRITE.
- ZD-df 1.金额单位使用区分: 「点式文本使用“¥”，句子中使用“元”。」 and 「基于有赞当前业务，关于货币的说明对象为人民币。」; 5: 「一般情况下保留两位小数。」
- AD-df 金额: 「以人民币为例，推荐使用 `CNY`，`CNY` 为国际上通用的货币代码。」 Example 「CNY1,123.00」 (no space between code and digits)
- TB-unit 2: 「在表述资产额度场景中，数字需保留至小数点后两位」 Example 「用户输入金额：¥500.00」
- SM-cg 数字: 「运用在正式场合（例如交易明细，订单详情）时，展示完整的货币格式，建议默认使用该展示形式」
- Uppercase amounts (receipts): AD-df 「金额数字到「元」为止的，在「元」之后，应写「整」字，在「角」之后可以不写「整」字。」
- Test: script — ¥ followed by a space, or 元 placed before the digits: FYI; mixed ¥ and CNY in one bundle: flag.
- Strength: PRAC(4/4 address currency). **Ant recommends CNY; Zan and Teambition use ¥.** Not resolved. Which yen/yuan sign code point (U+00A5 ¥ vs U+FFE5 ￥) the guides use was not verified.

#### CN-53 Date format: 2018-02-02 (zero-padded, hyphen) or 2018年2月2日 (no padding) — not a slash (most) — Microsoft lists the slash
- Kind: WRITE.
- AD-df 绝对时间: 「中国默认使用 `yyyy-mm-dd` 格式。」
- ZD-df 1.日期: 「日期使用分隔符时，需使用“-”作为分隔符；日和月计数在“10”以下时，需使用“0”补齐时间信息；」 正确 「2018-02-02」 / 错误 「2018/12/12」, 「2018-2-2」; and 「日期不使用分隔符时，日和月计数在“10”以下时，不需使用“0”补齐日期时间信息；」 正确 「2018年2月2日」 / 错误 「2018年02月02日」; 「年、月、日单独使用时，后面需带上中文单位。」 正确 「2018年」 / 错误 「2018Y」
- SM-cg 日期: 「使用短线–（Option和-）连接年月日，不使用 / ，如：en：03/01/2022；   zh：2022-03-01」 (the 「–」 in the rule text may be U+2013; the zh example's separator was not verified)
- TB-exp 格式: 「如果是在一个完整的句子当中，可采用 3 月 18 日。」 and 「在孤立的信息位置，需采用 03-18」; 「例如 YYYY-MM-DD」
- TB-pu 2: 「表达年月日时，中间间隔用“-”」 推荐 「2019-01-02」
- **Against:** MS 4.1.13 Slash: "4. Indicates dates. For example, 1994/1/1"
- Test: script — \d{4}/\d{1,2}/\d{1,2} in zh-CN strings: flag (unless the project follows Microsoft); \d{4}-\d(?!\d): flag (no zero pad); \d{4}年0\d月: flag.
- Strength: PRAC(4/4) for hyphen ISO-style dates; L10N(1/4) lists slash dates. GB/T 7408 and GB/T 15835 not opened.

#### CN-54 Time: 24-hour clock; date and time separated by a space; Microsoft's mapping when a source string has AM/PM
- Kind: WRITE.
- AD-df: 「二十四小时时间格式  `HH:mm:ss` 。」 and 「日期与时间连在一起时，两者之间用「空格」隔开，如“2019-12-08 06:00:00”。」
- SM-cg 统一规范: 「使用 24 小时制表示时刻，如 07:00，21:00，不使用 am、pm」
- ZD-df 2.时间: 「日期、星期与时刻一起使用时，格式为“日期 时刻”或“日期 星期 时刻”。」 正确 「2018-12-12 周三 12:00:00」 / 错误 「12:00:00 2018-12-12 周三」
- MS 4.1.2 (only when translating AM/PM): "Translations of AM/PM acronyms should be varied along various time periods, that is: Use “凌晨” for 12:00 AM – 5:59 AM Use “上午” for 6:00 AM – 11:59 AM Use “中午” for 12:00 PM – 12:59 PM Use “下午” for 1:00 PM – 05:59 PM Use “晚上” for 6:00 PM – 11:59 PM"
- Test: script — AM/PM, am/pm in zh-CN strings: flag; time before date: flag.
- Strength: PRAC(2/4: Ant, Semi state 24-hour; Zan states the date-weekday-time order and writes 24-hour examples) + L10N(1/4) for the 12-hour mapping. TB-exp's own examples write times with a full-width colon (「今天 15：30」) and elsewhere half-width (「02:35」) — inconsistent on the page as extracted.

#### CN-55 Weekdays: 周一 … 周日 (not 星期一)
- Kind: WRITE.
- ZD-df 2.时间: 「描述“周”的概念时，统一使用“周*”的描述方式，如：周一、周六、周日。」 正确 「周一」 / 错误 「星期一」
- MS 4.1.1 (abbreviations, table): Mon … Sun → 「周一、周二、周三、周四、周五、周六、周日」
- TB-exp example: 「7 月 3 日（周二） 15：30」
- Test: script — 星期 followed by a weekday character in compact UI: FYI.
- Strength: PRAC(2/4) + L10N(1/4 for abbreviations).

#### CN-56 Relative time: 刚刚, N 分钟前, N 小时前; thresholds differ
- Kind: WRITE.
- AD-df 相对时间: 「1 分钟以内的时间」 → 「刚刚」; 「1 小时以内的时间」 → 「N 分钟前」; 「24 小时以内的时间」 → 「N 小时前」; 「24 小时以外的时间」 → 「用 `mm-dd HH:mm` 的形式表示，即 12-08 08:00」; 「超过一年的时间」 → 「用 `yyyy-mm-dd HH:mm` 的形式表示，即 2019-12-08 08:00」.
- TB-exp 相对时间: 「1 分钟内 | 刚刚 | 刚刚」, 「大于 1 分钟 | n 分钟前 | 12 分钟前」, 「20 小时之内（或24小时） | n 小时前 | 19 小时前」, 「超过 24 h | n 天前 | 1 天前」; absolute: 「昨天 | 昨天 hh : mm | 昨天 02:35」
- SM-cg timestamps (zh column): 「7天–1年 | Aug 14 at 10:30 | 08–14 10:30」, 「超过 1 年 | Aug 14, 2016 at 10:30 | 2016–08–14 10:30」 (no Chinese relative words on the page)
- Test: script — relative-time formatter output: compare with the project's chosen table.
- Strength: PRAC(2/4 give Chinese relative words; they agree up to 24 h, then Ant switches to a date and Teambition to n 天前).

#### CN-57 Number and unit: space or no space — sources differ; % and ° never spaced
- Kind: TYPO (string check).
- WP 数字与单位之间需要增加空格: 正确 「我家的光纤入屋宽带有 10 Gbps，SSD 一共有 20 TB」 / 错误 「我家的光纤入屋宽带有 10Gbps，SSD 一共有 20TB」; 「例外：度数／百分比与数字之间不需要增加空格：」 正确 「角度为 90° 的角，就是直角。新 MacBook Pro 有 15% 的 CPU 性能提升。」 / 错误 「角度为 90 ° 的角，就是直角。新 MacBook Pro 有 15 % 的 CPU 性能提升。」
- SM-cg 数字: 「数字和单位之间需要有空格」
- **Against:** AD-df 「计量单位默认用小写字母。」 with example 「123,220kg」 (no space; narrow pass); ZD-pr 正确 「208.32kg」 / 错误 「208.32 千克」 and the rule 「计量单位存在对应的“国际单位制”英文缩写表达时，需使用英文缩写。」; ZD-pu 5: 「一个完整概念的表述中，数字与英文、符号间不使用空格，如：10%、4K。」; MS examples 「1 ~ 10MB」.
- Test: script — choose one per project; flag mixing; always flag a space before % or °.
- Strength: L10N(1/4) + PRAC(1/4) for a space; PRAC(2/4) + L10N(1/4, examples) for no space. **Not resolved**, except % and ° (WP, ZD-pu, AD-cw 「50%」 agree: no space). WP and TB-mix may share an upstream (CN-39); TB-mix is silent on units.

#### CN-58 Phone numbers and masking
- Kind: WRITE.
- ZD-df 通讯号码: 「对于手机号码，可使用“3 4 4” 的格式显示，便于查看，如：135 2456 5865。」
- AD-df 部分脱敏: 「保留手机号码前 3 位与后 4 位。」
- ZD-df 2.手机号码脱敏规则: 「一般情况，隐藏手机号的第 4 位至第 7 位，共 4 位数字」 (equivalent to Ant's rule for an 11-digit number)
- AD-cw: 「多用于替换显示隐私信息。」 (the * character)
- Test: script — masked phone patterns other than \d{3}\*{4}\d{4}: FYI.
- Strength: PRAC(2/4). Agree.

## A7. Spacing between Chinese and Latin letters or digits

#### CN-59 A space between Chinese and Latin letters, and between Chinese and digits — in running text
- Kind: TYPO (string check) / WRITE.
- WP 中英文之间需要增加空格: 正确 「在 LeanCloud 上，数据存储是围绕 AVObject 进行的。」; 中文与数字之间需要增加空格 (example): 「今天出去买菜花了 5000 元。」; exception 「例外：「豆瓣FM」等产品名词，按照官方所定义的格式书写。」
- MDN: 「请在中文和拉丁语系文字之间保留**一个空格**」; 「请注意，数字与中文之间也请保留空格：」
- MZ-sumo 译文格式: 「中英文混合时应在中英文之间留空格。」
- TB-mix: 推荐 「简单 7 课，帮助你快速学会 Teambition 的基本操作。」 / 不推荐 「简单7课，帮助你快速学会 Teambition的基本操作。」
- TB-pu 3 / TB-unit 3: 「阿拉伯数字距离汉字前后需要空一格使用，便于辨识和阅读」 推荐 「待处理任务 35 条」 / 不推荐 「待处理任务35条」
- AD-cw 基本标点规范: 「全角字符和半角字符搭配时，需要添加空格，如：两个、2 个、50%。」
- ZD-pu 2.段落型文本: 「中文与阿拉伯数字，英文，“+”、“-”、“＆”等符号混排时，使用空格作为间隔。」 正确 「你有 30 条未读消息，请及时查看」, 「请升级至 iOS 12 以上版本」
- CLREQ 2.1.3 (vertical writing, proportional fonts): "Use a spacing of no more than one-quarter of the width of a Han character" — the horizontal-writing section was cut off by the fetch tool (gaps.md).
- MS: no rule stated. Its examples mostly have a space (「发布到 Web 上」, 「%d 位用户在线」) but not always (table cell 「通过Internet 或电话」, a 3.1 table cell with 「Azure中」, 「U 盘」 vs 「U盘」) — not counted.
- Test: script — /[\u4e00-\u9fff][A-Za-z0-9]/ and /[A-Za-z0-9][\u4e00-\u9fff]/ in running text: flag (FYI in functional text; see below). Alternative typography route: CSS `text-autospace` (TB-mix cites 「CSS Text Module Level 4 的 `text-spacing` 和 Microsoft 的 `-ms-text-autospace`」); browser support not checked in this pass.
- Strength: PRAC(3/4: Teambition, Ant, Zan) + L10N(3/4: WP, MDN, MZ-sumo). WP's references list 中文文案排版指北 (community GitHub guide, not opened) and TB-mix reuses near-identical examples, so those two may be one voice.
- **Disagreement, short UI text:** ZD-pu limits the space to paragraph text. 3.功能型文本: 「为确保文本阅读的完整性与连续性，一般情况下不使用空格，可在字重、字号、颜色等方面，对需突出文本作出视觉样式的区分。」 4.描述型文本: 「为保证文本阅读的完整性与连续性，一般情况下不使用空格。」 The others state no such limit. Not resolved.

#### CN-60 Spaces around inline links
- Kind: TYPO (string check).
- WP 链接之间增加空格: 「请 提交一个 issue 并分配给相关同事。访问我们网站的最新动态，请 点击这里 进行订阅！」 (link text has spaces on both sides)
- MDN: 「对于链接文字和非链接文字部分，同样适用此规则：」
- ZD-df 4.超链接文本: 「超链接文本在句中时，即属于句子的一部分，在句中原有位置显示即可。」; 「超链接文本在句外时，在句尾加空格显示。」
- Test: script — <a> inside CJK text without surrounding spaces: FYI.
- Strength: PRAC(1/4) + L10N(2/4). WP and Zan differ on links inside a sentence (WP spaces them; Zan says keep in place, no mention of spaces).

#### CN-61 Non-breaking space inside abbreviations (Microsoft)
- Kind: TYPO.
- MS 4.1.1: "• Use a non-breaking space (Ctrl+Atl+空格键) in any abbreviation to avoid having one letter move to the beginning of the next line." and "Abbreviation should not contain a space."
- Test: script — n/a (contradictory as written: no space, but a no-break space; read as: if a space is unavoidable, make it non-breaking).
- Strength: L10N(1/4).

## A8. Plain language and government text guidance

#### CN-62 Age-friendly versions: no jargon or new internet words; do not rename well-known functions
- Kind: WRITE.
- MIIT 附件1 3.1.1: 「避免采用专业词语或网络新词语作为访问目标和结果表达。如确有必要，应在用户操作前给予必要的提示。」
- MIIT 附件1 3.1.3: 「避免修改公认的通用名称或功能标识，如确有必要，则应提供必要的说明机制。」
- Test: judgment only.
- Strength: AUTH. **Scope:** the 适老化 (age-friendly) version of a website or app under MIIT's 2021 programme; not stated for general UI.

#### CN-63 Digital publications must follow the punctuation and numeral standards
- Kind: WRITE.
- MOE54 第六条: 「第六条 数字和网络出版物使用国家通用语言文字，应当符合汉语拼音、普通话语音、规范汉字、现代汉语词形、标点符号和数字用法等语言文字规范标准。」
- MOE54 第八条 (office suites and proofreading software should flag): 「（一）规范汉字文本中夹用的繁体字、异体字；」 「（二）错别字、错符；」 「（三）现代汉语异形词非推荐词形；」
- Test: n/a (points to GB/T 15834 / 15835, not opened).
- Strength: LAW, with the scope caution in CN-34.
- No general plain-language guideline for UI text from a Mainland government body was found (gaps.md).

# Half B — Typography for the web

Additional source keys for half B:

| Key | Source | URL |
|---|---|---|
| AD-font | Ant Design — 字体 (font.zh-CN.md) | https://raw.githubusercontent.com/ant-design/ant-design/master/docs/spec/font.zh-CN.md |
| EP-ty | Element Plus — Typography 排版 | https://element-plus.org/zh-CN/component/typography.html |
| ZD-font | Zan Design — 字体 | https://design.youzan.com/visual/font.html |
| SM-ty | Semi Design — Typography 版式 (doc) | https://raw.githubusercontent.com/DouyinFE/semi-design/main/content/basic/typography/index.md |
| SM-css | Semi Design — semi-theme-default global.scss (code, not docs) | https://raw.githubusercontent.com/DouyinFE/semi-design/main/packages/semi-theme-default/scss/global.scss |
| ARCO-css | Arco Design — components/style/theme/default.less (code, not docs) | https://raw.githubusercontent.com/arco-design/arco-design/main/components/style/theme/default.less |
| TD-css | TDesign — tdesign-common style/web/theme/_font.less (code, not docs) | https://raw.githubusercontent.com/Tencent/tdesign-common/develop/style/web/theme/_font.less |
| MDN-tst | MDN — text-spacing-trim | https://developer.mozilla.org/en-US/docs/Web/CSS/text-spacing-trim |
| MDN-tas | MDN — text-autospace | https://developer.mozilla.org/en-US/docs/Web/CSS/text-autospace |
| MDN-tep | MDN — text-emphasis-position | https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-position |
| W3C-lang | W3C i18n — Why use the language attribute? | https://www.w3.org/International/questions/qa-lang-why |

Strength for font stacks is counted as **STACK(n/6)** over the six Mainland design systems whose stack could be read: Ant (docs), Element Plus (docs), Zan (docs, font names only), Semi (code), Arco (code), TDesign (code). A stack published only in code is a fact about the library's default, not a written recommendation; it is marked "(code)".

## B1. Punctuation width and position

#### CN-64 Punctuation is full-width; in Mainland horizontal text the pause/stop marks sit at the lower left of the square — Taiwan and Hong Kong centre them
- Kind: TYPO (render check).
- CLREQ 2.1.2 (all regions): "There are no notable differences among different regions in the glyphs of punctuation marks." / "The major differences are their size and where the character face is positioned relative to the character frame."
- CLREQ 2.1.2 (Mainland): "In Mainland China, the punctuation marks are usually positioned following the characters they are supposed to mark;" and "In horizontal writing mode, the pause or stop punctuation marks are placed at the lower left corner in the square" / "space while in vertical writing mode, they are placed in the right upper corner." (the lower-left sentence follows the Mainland sentence; read as Mainland)
- CLREQ 2.1.2 (Taiwan and Hong Kong only): "In Taiwan and Hong Kong, pause or stop punctuation marks are usually positioned in the vertical and horizontal center" / "of the square space left for them."
- CLREQ 2.1.2: pause or stop marks "include the slight-pause comma, comma, semicolon, colon, period," / "question mark, exclamation mark, etc." and "They take the same dimensions as well as the direction as a character in their respective writing modes does."
- GBT15834-W3C 5.1.1 (horizontal): "Full stops(U+3002), commas(U+FF0C), ideographic commas(U+3001), semicolons(U+FF1B), colons(U+FF1A)" / "should all be after the corresponding text, and carry one em space." / "They should be placed in the lower left corner, and could not be the start of a line." 5.1.2: question and exclamation marks (U+FF1F, U+FF01) "should be placed in the left side, and could not be the start of a line."
- Test: render check — in a zh-CN page, 、。，get a glyph whose ink sits in the lower-left quadrant of the em box (compare against a zh-TW rendering of the same string); flag centred marks. How a font chooses between the two forms (OpenType `locl` by language) was not checked in a source; see CN-65.
- Strength: STD-tr + W3C. **Do not apply the Mainland position to zh-TW or zh-HK pages.**

#### CN-65 Mark the page `lang="zh-CN"` (or `zh-Hans`) so the browser picks Simplified Chinese glyphs
- Kind: TYPO.
- W3C-lang: Chinese, Japanese and Korean "may share the same code point for an ideographic character"; "speakers of these languages expect the glyphs used to vary in small details from language to language."; "some browsers automatically assign appropriate fonts according to the language of the content". Caption: "The glyphs for the Han character for snow (雪) with in different scripts (en, ko, zh-Hant, zh-Hans, and ja)."
- Test: script — `<html lang>` missing or not zh-CN / zh-Hans / zh on a Simplified Chinese page: flag.
- Strength: W3C (i18n article). That `lang` also switches punctuation position (CN-64) is **our inference**, not stated in the sources opened.

#### CN-66 The interpunct (间隔号) is half a character wide in Mainland China
- Kind: TYPO.
- CLREQ: "In Mainland China, interpuncts take up half the space of a Hanzi." (Taiwan/Hong Kong: "interpuncts should have the same dimensions as a Hanzi in both vertical writing mode and horizontal writing mode")
- GBT15834-W3C 5.1.7: "Interpuncts(U+00B7) are between the two corresponding words and carry half an em space." / "They should be aligned to the vertical center of the corresponding base character" / "and should not be the start of a line."
- Test: judgment only (depends on the font).
- Strength: STD-tr + W3C.

## B2. Emphasis

#### CN-67 Emphasis dots go under the characters in horizontal Chinese: `text-emphasis-position: under right`
- Kind: TYPO (CSS).
- CLREQ (emphasis marks): "emphasis marks are placed under the characters" (horizontal); "they are usually placed to the right side of the characters" (vertical); "Unlike Chinese, emphasis marks in horizontal Japanese text are placed above the text." (no region named for Chinese)
- MDN-tep: "In Chinese, on the other hand, the preferred position is `under right`." Baseline, widely available ("available across browsers since March 2022").
- Test: script — `text-emphasis` used on zh-CN content without `text-emphasis-position: under right` (or with `over`): flag.
- GBT15834-W3C 5.1.8: "Emphasis dots and proper marks(underline) should be underneath the characters."
- Strength: STD-tr + W3C + MDN.

#### CN-68 Emphasise with weight, not italics
- Kind: TYPO.
- CLREQ 3.1.1.3: "In body text, characters in Hei style with thicker strokes typically indicate emphasis."; 3.1.1.1: Song "When used in headings, the characters will appear in a bold face, so as to distinguish the heading from the text."
- TB-mix (中西文混排): emphasise Chinese by weight rather than italics; recommended example uses bold 「保持高效」, not-recommended uses italics (pair per extraction; markup characters not verified).
- ZD-font: 「当需要强调时，建议使用 Medium」; 「我们建议标题类使用 Medium，以突出层级关系，让信息更清晰。」; 「正文和辅助字号建议使用 Regular 字重。」
- AD-font: 「多数情况下，只出现 regular 以及 medium 的两种字体重量，分别对应代码中的 400 和 500。」 and 「在英文字体加粗的情况下会采用 semibold 的字体重量，对应代码中的 600。」
- MS 4.1.7 (localization of source formatting): "a. Please do NOT use italic or bold font style for words or sentences that are italic or bold in the source files." — UI terms take “” instead (CN-20). Italic titles become 《》 (CN-44).
- Test: script — `font-style: italic` / `<em>` / `<i>` styled italic on zh-CN text: flag.
- Strength: W3C + PRAC(2/4: Teambition, Zan state weight for emphasis; Ant states weights only) + L10N(1/4). No source read recommends italics for Chinese. **Microsoft also drops bold** when localizing source bold; the company guides use Medium/bold for emphasis. Not resolved for bold.

#### CN-69 Medium (500) rather than Semibold for Chinese emphasis on Windows-heavy audiences (Zan)
- Kind: TYPO.
- ZD-font: 「相对 Semibold，Medium 兼容性更强，在用微软雅黑等字体时也能较好地显示。」 and, for digits and Latin text: 「建议使用 Semibold，使得中西文混排时更适当。」
- Test: judgment only.
- Strength: PRAC(1/4).

## B3. Font stacks

#### CN-70 Name a Simplified Chinese UI face in the stack: PingFang SC (Apple) and Microsoft YaHei (Windows)
- Kind: TYPO (CSS).
- EP-ty: 「Inter, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;」
- SM-css (code): "Inter", -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif
- ARCO-css (code): Inter,-apple-system,BlinkMacSystemFont,PingFang SC,Hiragino Sans GB,noto sans,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif
- TD-css (code): `--td-font-family: PingFang SC, Microsoft YaHei, Arial Regular;` (as published; "Arial Regular" is not a standard family name)
- ZD-font (names, no CSS): Chinese 苹方, 冬青黑体, 微软雅黑, 黑体, 宋体; English Helvetica Neue, Helvetica, Arial; 「字体家族优先使用系统默认的字体。」
- AD-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, emoji faces — **no Chinese face named**; 「优先使用系统默认的界面字体」.
- Test: script — zh-CN stylesheet whose font-family names no CJK face: flag (WARN; Ant's stack would be flagged, so this is a skill choice, not a consensus).
- Strength: STACK(5/6 name PingFang SC or 苹方; 5/6 name Microsoft YaHei or 微软雅黑; 4/6 name Hiragino Sans GB or 冬青黑体). Ant names none.
- Observations, not rules: (1) no stack read names a Simplified Chinese face for Linux or Android (Noto Sans SC / Source Han Sans SC); Arco's "noto sans" is the Latin Noto family name — what those systems then render is **our inference** (browser fallback), not from a source. (2) Element, Semi and Arco put a Latin face (Inter) first and the Chinese faces after it; TDesign puts PingFang SC first. (3) No stack uses a Song (serif) face for UI; MIIT 附件2 1.1 (age-friendly apps) says 「在移动应用中，建议使用无衬线字体」. (4) MS 4.1.7 "The font must be SimSun or 宋体 and the font size is 9 point for Chinese text." is a rule for localized document files, not for web UI; not applicable here.

## B4. Size, line height, contrast

#### CN-71 Desktop body text 14 px (Ant, Zan, Semi); WeChat Mini Program sizes in pt
- Kind: TYPO.
- AD-font: base raised 「从原先的 12 上升至 14」; 「我们建议的主要字体为 14，与之对应的行高为 22。」
- ZD-font: 「为了提升用户的阅读体验，我们将 PC 端主字体由原先的 12 升级为 14。」; 「由于用户年龄层偏大，12 的字号在显示器上的物理大小对于用户阅读体验并不友好」; 「当字号大于 14 时，对于表格类信息呈现则会受到一定的影响」
- SM-ty: 「段落组件和文本组件支持两种尺寸，`small`（12px） 和 `normal`（14px） 和 `inherit`，默认为`normal`。」
- WX 5.1: 「微信内字体的使用与所运行的系统字体保持一致，常用字号为22, 17, 15, 14, 12(pt)，使用场景具体如下：」 (uses per size are in an image; not read)
- Test: script — computed body font-size < 14px on desktop zh-CN pages: WARN.
- Strength: PRAC(3/4 publish a desktop body size; all 14) + WX. These are B2B/desktop component libraries; consumer-site and mobile body sizes are not covered by them (our own 17-service measurement is context only, not cited).

#### CN-72 Line height: 14/22 (Ant), 14/20 (Zan), 1.3 / 1.5 / 1.7 (Element); at least 1.3 in age-friendly apps (MIIT)
- Kind: TYPO.
- AD-font: 「我们建议的主要字体为 14，与之对应的行高为 22。」 (ratio 1.571 — our arithmetic)
- ZD-font: 「在设计体系中，主字号 14 建议的行高为 20。」 (ratio 1.429 — our arithmetic)
- EP-ty: line-height options 1 "No line height", 1.3 "Compact", 1.5 "Regular", 1.7 "Loose" (labels as extracted from an English rendering of the zh-CN page)
- MIIT 附件2 1.2: 「段落内文字的行距至少为1.3倍，且段落间距至少比行距大1.3倍，同时兼顾移动应用适用场景和显示效果。」 (age-friendly apps)
- Test: script — computed line-height / font-size < 1.3 on wrapping zh-CN body text: WARN.
- Strength: PRAC(2/4 give a figure) + EP + AUTH (age-friendly scope). They differ (1.43 vs 1.57); no source gives a single value for Chinese body text. CLREQ's guidance on line spacing, if any, was not reached (gaps.md).

#### CN-73 Age-friendly versions: large-text option, minimum sizes, contrast
- Kind: TYPO.
- MIIT 附件1 1.2.3: 「在不依赖操作系统和浏览器的前提下，计算机适老化网页应提供网页的放大设置与大字屏幕服务，移动网页至少提供一种18dp/pt及以上的大字体。」
- MIIT 附件2 1.1: 「在移动应用中，建议使用无衬线字体，应可对字型大小进行调整（随系统设置调整，或移动应用内部具备字体大小设置选项），」 / 「主要功能及主要界面的文字信息（不包含字幕、文本图像以及与移动应用功能效果相关的文本）最大字体不小于30 dp/pt，」 / 「适老版界面及单独的适老版APP中的主要文字信息不小于18 dp/pt，同时兼顾移动应用适用场景和显示效果。」
- MIIT 附件2 1.3: 「文本/文本图像呈现方式、图标等元素间的对比度至少为4.5：1（字号大于18 dp/pt时文本及文本图像对比度至少为3：1）。」
- MIIT 附件2 1.4: 「文本颜色不是作为传达信息、表明动作、提示响应等区分视觉元素的唯一手段。」
- Test: script — text contrast < 4.5:1 (< 3:1 above 18 px-equivalent); no text-size control on an age-friendly version: flag.
- Strength: AUTH. Scope: MIIT's 2021 age-friendly programme (工信厅信管函〔2021〕67号).

## B5. Spacing, compression, line breaking

#### CN-74 Automatic Han–Latin spacing in CSS: `text-autospace` (Baseline 2025) — an alternative to typed spaces (CN-59)
- Kind: TYPO (CSS).
- MDN-tas: "The **`text-autospace`** CSS property allows you to specify the space applied between Chinese/Japanese/Korean (CJK) and non-CJK characters." Values include `normal` (= `ideograph-alpha` + `ideograph-numeric`), `no-autospace`, `insert` ("only where no existing space"), `replace`. Badge: "Baseline 2025 – Newly available".
- TB-mix: notes that CSS automatic spacing is not yet widespread and keeps typing spaces by hand (cites CSS Text 4 `text-spacing` and `-ms-text-autospace`).
- Test: script — if `text-autospace` is set, typed spaces between Han and Latin are redundant (check for double spacing in rendering); if not set, apply CN-59.
- Strength: MDN (spec summary). How `normal` interacts with a typed U+0020 was not confirmed in the pages read; check before shipping.

#### CN-75 Compression of adjacent punctuation and at line start/end: `text-spacing-trim` exists but is not Baseline
- Kind: TYPO (CSS).
- MDN-tst: "The **`text-spacing-trim`** CSS property controls the internal spacing set on Chinese/Japanese/Korean (CJK) punctuation characters between adjacent characters (kerning) and at the start or end of text lines." "Limited availability. This feature is not Baseline because it does not work in some of the most widely-used browsers." `trim-both`, `trim-all` and `auto` are defined in CSS Text 4 but "not implemented in any browser" (per extraction).
- Test: n/a (no rule; progressive enhancement only).
- Strength: MDN. **What the Mainland convention for compression is (CLREQ's section on it) was not reached** — gaps.md. No rule can be stated.

#### CN-76 Line-start and line-end prohibitions (GB/T 15834 Part 5)
- Kind: TYPO (render check).
- GBT15834-W3C 5.1.1: 。，、；： "could not be the start of a line." 5.1.2: ？！ "could not be the start of a line."
- GBT15834-W3C 5.1.3: "Left quotation marks(U+2018, U+201C), left brackets(U+FF08, U+3014, U+3010)," / "left double angle brackets(U+300A), and left angle brackets(U+3008) should be placed on the left side" / "of the relative characters and could not be the end of a line," / "while right quotation marks(U+2019, U+201D), right brackets(U+FF09, U+3015, U+3011)," / "right double angle brackets(U+300B), and left angle brackets(U+3009) should be placed on the right side" / "of the relative characters and could not be the start of a line." (the second "left angle brackets(U+3009)" is the right angle bracket; the translation's slip)
- GBT15834-W3C 5.1.4 (dash) and 5.1.5 (ellipsis): not split across two lines (quotes in CN-42, CN-41).
- GBT15834-W3C 5.1.6: connectors (U+2013, U+2010, U+301C) "should not be the start of a line."; 5.1.7: interpunct "should not be the start of a line."; 5.1.9: "Slash marks(U+002F) carry half an em space and could not be the start not the end of a line."
- Test: render check — after layout at several widths, no line starts with 。，、；：？！ or a closing quote/bracket/》, and no line ends with an opening quote/bracket/《; no —— or …… split. Which CSS settings (`line-break`, `word-break`) achieve this in each browser was not checked in a source; browsers' default CJK line breaking was not tested in this pass.
- Strength: STD-tr. Region: Mainland (GB/T). CLREQ's own line-breaking section was not reached.

#### CN-77 A full-width mark at the end of a line may be set half-width; punctuation spacing may be reduced to avoid a short last line
- Kind: TYPO.
- GBT15834-W3C 5.1.10: "When a punctuation mark is at the end of the line, to beautify the whole composition," / "even if it's a full-width character, it should carry the same em space of a half-width character."
- GBT15834-W3C 5.1.11: "In the practice of composition, for a better composition or reading experience," / "or to avoid the line-breaking of the last character of a bottom paragraph or a new page cause by the last character" / "(which will result in a wasteful and ugly layout), we could reasonably reduce the space of the punctuation mark."
- Test: n/a for scripts today; the CSS route is `text-spacing-trim` (CN-75, not Baseline).
- Strength: STD-tr (5.1.10 "should"; 5.1.11 "could").

#### CN-78 Keep an Arabic number on one line
- Kind: TYPO.
- GBT15834-W3C (a note on the same page referring to GB/T 15835—2011, labelled "5.1.7 Line-breaking"): "An Arabic number in Chinese should stay in one line and never be broken."
- Test: render check — no line break inside a digit run (including grouped numbers like 1,234.56) in zh-CN text.
- Strength: STD-tr (secondary: the W3C page's note on GB/T 15835; the 15835 text itself not opened).

#### CN-79 Line length — no figure from an opened source
- No opened source gives a characters-per-line figure for Chinese. A search snippet attributes "≤ 48 characters per line (horizontal)" to CLREQ; **not opened, not used**. ZD-pr names 「行字数」 as a lever without a figure. See gaps.md.

