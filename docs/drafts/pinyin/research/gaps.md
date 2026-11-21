# /pinyin research — gaps (2026-11-21)

What was looked for and not found, and pages that blocked or could not be read. A gap is a finding: the skill should not state a rule here from this pass.

## Sources that could not be read

| Source | What happened | Consequence |
|---|---|---|
| GB/T 15834-2011《标点符号用法》 — http://www.moe.gov.cn/jyb_sjzl/ziliao/A19/201001/t20100115_75611.html | WebFetch upgrades to https; the server 302s https back to http; loop. hudong.moe.gov.cn copy of the same path: HTTP 404. openstd.samr.gov.cn not tried for 15834. Copies on university, local-government, wikisource, archive.org and document-sharing sites were **not** used as substitutes (leads for a human: a 张掖市 government repost, https://www.zhangye.gov.cn/szb/dzdt/zsbx/201811/t20181129_138125.html, and university language-office reposts surfaced in search). Extract requested from team-lead (2026-11-21). **Part 5 only** was read in W3C's English translation (GBT15834-W3C) and is cited as STD-tr. | No candidate quotes the Chinese standard. CN-37…CN-47 cite translation guides, company guides, CLREQ and the Part 5 translation; several read as restatements of 15834 Parts 4 (usage) and should be checked against it. |
| GB/T 15835-2011《出版物上数字用法》 — http://www.moe.gov.cn/jyb_sjzl/ziliao/A19/201001/t20100115_75603.html | Same redirect loop; hudong copy 404. | No STD candidate for numbers. CN-48/CN-49 cite Teambition, whose lists look drawn from 15835. A search snippet says 15835 allows ~ or 一字线 for ranges and forbids two-digit years; **not opened, not used.** Lead for a human: government reposts (e.g. https://www.snxingping.gov.cn/zwgk/fdzdgknr/zzjg/szfzssydw_17088/fzb_17089/zcfg_17093/202407/t20240708_1786289.html). CN-78 uses only the W3C page's one-line note on 15835. |
| GB/T 7408 (dates and times) — https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=3CFD9AE8FEADB062B3BC53651930DED1 | openstd page for GB/T 7408-2005 opened: status shown as 废止 (repealed); 「由于涉及版权保护问题，本系统不提供文本阅读服务」. Its successor was not looked up. | Date format candidates (CN-53) rest on company and translation guides only. |
| 中华人民共和国国家通用语言文字法 | gov.cn URL tried (https://www.gov.cn/ziliao/flfg/2005-08/31/content_27920.htm): HTTP 404. Local-government reposts not used. | MOE54 refers to this law for when traditional characters may be used; the law itself is not quoted. |
| W3C CLREQ, sections after ~8.3 | The fetch tool truncates the 580 KB page (TR, editor's draft, raw HTML and the 2020 WD all truncated). Line breaking (禁则), horizontal Han–Western mixing, line length, compression of adjacent punctuation never reached the tool. Text dump requested from team-lead. | Half B has no CLREQ line-breaking or line-length candidates. A search snippet says CLREQ gives ≤ 48 characters per line (horizontal) and ≤ 1/4 em Han–Western spacing; **not opened, not used** except the 1/4 em sentence that the fetch returned for vertical writing. |
| 术语在线 (全国科学技术名词审定委员会) — https://www.termonline.cn/ | Title only; content is client-rendered. API not tried (would be working around the page). | **No Taiwan/Mainland software-term table can be stated.** Blog and forum comparison tables exist (CSDN, cnblogs, HackMD) and a 2008 chinanews.com.cn article; none is an authority; none used. |
| Apple HIG 编写 (zh-CN) | Body empty (client-rendered). | Apple not counted. No Apple zh-CN style guide found. |
| Arco Design spec pages (e.g. https://arco.design/docs/spec/modal) | Title only (client-rendered). A search snippet says Arco's English Input page advises labels of about 6 Chinese characters; **not opened, not used.** | Arco not counted in PRAC. |
| TDesign (Tencent) | No writing or copywriting page found (searches: 「TDesign 文案规范」, 「TDesign 设计指南 文案」); component pages are client-rendered. | Not counted. |
| WeChat / 腾讯 public writing guide | 微信小程序设计指南 opened (used for feedback/error placement); it has no wording rules. No other Tencent writing guide found. | WX cited only where it speaks. |
| 字节跳动 writing guidance beyond Semi | None found besides Semi Design (ByteDance/Douyin). | — |
| Alibaba Fusion | No 文案规范 page found. Teambition (an Alibaba company) and Ant Design (Ant Group) were used instead. | — |
| HarmonyOS design guide (Huawei), OPPO ColorOS, 飞书 (Lark) | No writing/wording section found by search; Huawei and Lark pages not opened. | Not counted. |
| Google zh-CN style guidance | One search (「Google 简体中文 风格指南 …」): results were community translations of Google's *code* style guides only. | Not counted. |
| Apple Style Guide (zh-cn URL) — https://support.apple.com/zh-cn/guide/applestyleguide/welcome/web | Opened: the guide content is English; no Simplified Chinese rules on the page. | Not counted. |

## Searched, nothing found that could be opened

- **你 vs 您 from a government or language authority.** One search (「国家语委 您 你 称呼 规范 用户界面 敬称」) found only Baidu Baike, Sohu and dictionary pages. Only company and translation guides speak to it (CN-01). Nothing on formal sectors (banking, government services), where Teambition alone says 您 may fit.
- **A Mainland government plain-language guideline for UI or web text** (comparable to Korea's 쉬운 공공언어 or Japan's 公用文作成の考え方). One search (「国家语委 简明 公文 语言 通俗 政府网站 …」) found only official-document (公文) writing material and university handouts. MIIT's 适老化 specification (CN-62) is the nearest, scoped to age-friendly versions.
- **《党政机关公文格式》GB/T 9704** — not opened; it governs printed official documents and was not needed for screen text in this pass.
- **Advertising Law (广告法) on 最佳/最高级 wording** — not opened; CN-06 rests on design guides only.
- **Dictionary-level orthography for 登录/登陆, 账号/帐号, 其他/其它** (现代汉语词典, 第一批异形词整理表) — not opened; CN-16 rests on company glossaries.

## Pages where the extraction was ambiguous

- ZD-nm (命名策略): the label order of its five example pairs could not be fixed from the extraction; no rule taken.
- ZD-df 3.时间范围与区间 and ZD-se 1.语序表达: the broad pass and the narrow pass returned 正确/错误 labels in opposite order. ZD-df: the narrow pass matches the rule text and is cited. ZD-se: not resolvable from text; the pair is not cited (CN-18). Any single-pass example pair (header lists the keys) carries this risk.
- **WordPress and Teambition 中西文混排 may be one voice:** WP lists 中文文案排版指北 (sparanoid/chinese-copywriting-guidelines, a community GitHub guide) under 参考文献; TB-mix uses near-identical example sentences (「…好开心！」, the 「Stay hungry, stay foolish.」 line, the front-end developer sentence) without credit. The upstream guide was not opened. Affects counts in CN-39, CN-44, CN-47, CN-57, CN-59.
- TB-exp: times appear with both full-width 「：」 and half-width 「:」 in the extraction; not resolved.
- MIIT 附件2 1.1 has two figures that a first broad pass ran together: the largest selectable size for main functions ≥ 30 dp/pt, and main text in the age-friendly version ≥ 18 dp/pt. A narrow pass separated them (CN-73).
- Semi Design: rules written in Chinese, examples mostly English; Semi's sections on capitalisation, articles, contractions, colons and semicolons are about English copy (CN-36).

## Half B

- **CLREQ on line breaking, horizontal Han–Western mixing, line length, compression and line spacing:** the fetch tool never reached those sections (truncation at ~8.3 on every copy tried). Line-start/line-end rules and end-of-line half-width setting were taken instead from GB/T 15834 Part 5 via W3C's translation (CN-76, CN-77). Line length (CN-79), Han–Western spacing width in horizontal text, and CLREQ's compression rules remain open. Needs the CLREQ text dump requested from team-lead, or a human reading https://www.w3.org/TR/clreq/.
- **How to get the CN-76 behaviour in CSS** (`line-break: strict` etc.) and what browsers do by default for Chinese: not checked in a source.
- **Which glyph forms a font uses for Mainland vs Taiwan punctuation position** (OpenType `locl`, Source Han / Noto CJK region subsets): not looked up. CN-65's link between `lang` and punctuation position is our inference.
- **Browser support details** for `text-autospace` and `text-spacing-trim`: the MDN compatibility tables did not come through the fetch; only the Baseline badges did.
- **A Simplified Chinese face for Linux/Android in any published stack:** none of the six stacks read names Noto Sans SC or Source Han Sans SC. Not a source gap so much as a finding; recorded in CN-70.
- **Consumer-product body sizes:** the four company systems are B2B/desktop libraries (14 px). No published guidance for consumer web or mobile web body size was found apart from WeChat Mini Program pt sizes and MIIT's age-friendly minimums.
- **Arco and TDesign typography docs** are client-rendered; only their code stacks were read.
- **Apple / Google zh-CN typography guidance:** not found or not readable (Apple HIG zh-CN writing page empty; not searched further for typography).

## Not done in this pass

- GB/T 15834 / 15835 not read (blocked); the punctuation and number candidates need re-checking against them when the extracts arrive.
- No second-language reviewer; no native reader has read any quote.
- Mozilla's Firefox zh-CN UI terminology (Pontoon) and WordPress's zh-CN glossary on translate.wordpress.org were not opened; both could supply translated-UI term choices.
