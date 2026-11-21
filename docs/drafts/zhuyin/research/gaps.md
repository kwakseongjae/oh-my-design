# /zhuyin research — gaps (2026-11-21)

What was looked for and not found, and pages that blocked. A gap is a finding: the skill should not state a rule here.

## Sources that could not be read

| Source | What happened | Consequence |
|---|---|---|
| 教育部《重訂標點符號手冊》修訂版 — PDF https://language.moe.gov.tw/001/upload/files/site_content/m0001/hau/Revised_Handbook_of_Punctuation.pdf ; HTML index https://language.moe.gov.tw/001/upload/files/site_content/m0001/hau/haushou.htm and per-mark page h1.htm | PDF: fetch tool saw only compressed streams. HTML: served as Big5, returned as mojibake (the extractor refused to guess). The search-result summary says each mark 「居正中」; that is a search snippet, not evidence, and is **not** used. Requested a Big5→UTF-8 or pdftotext extraction from the orchestrator (message sent 2026-11-21). | **The largest hole.** This is the national authority on punctuation for Taiwan, and the authority both MZ and (as an informative reference) MS cite. No candidate in this file states the MOE form of any mark, and there is no MOE citation for the centred position of 。，、 (TW-43 states it from CLREQ only). |
| 行政院 公文書橫式書寫數字使用原則 — https://www.ey.gov.tw/File/E64C5F6D27B78A72?A=C | The HTML page (https://www.ey.gov.tw/Page/8F768BC511A94C5D/1f6e18b4-7f15-4c4f-b65f-3f22fce91d4f) has only title, date 94-12-22 and the PDF link; PDF not fetched (same PDF limit). Requested extraction. | No AUTH rule on numerals or on 民國 dates. |
| 行政院《文書處理手冊》(112年6月8日修正) — ey.gov.tw page https://www.ey.gov.tw/Page/F0CD366C64B5A15C/ecb75289-a85d-45be-9fb0-0fa64c302b54 | The ey.gov.tw page (opened; 日期：112-09-20) holds only the title and two PDF attachments: 修正文書處理手冊 https://www.ey.gov.tw/File/2549CDCFAACC57E1?A=C and 文書處理手冊修正總說明及對照表 https://www.ey.gov.tw/File/EE04DFAEA47730FD?A=C. PDFs not readable by the fetch tool. Copies on university sites exist; not used as substitutes. Requested extraction. Scope note: it governs official documents (公文), not product UI. | No official-document rule on full-width/half-width use or on its 標點符號用法表. |
| 數位發展部 政府網站服務管理規範 — https://www.webguide.nat.gov.tw/announcement/281/file/330/H394w7tWdOzpQfL2lo2trPUvSQDZQSGY6oAqL6Vw.pdf | PDF only. https://www.webguide.nat.gov.tw/cp.aspx?n=554 returned the site's 404 page. Requested extraction. | No government web rule (fonts, dates, wording) used. |
| Apple HIG writing (zh-TW) — https://developer.apple.com/tw/design/human-interface-guidelines/writing | HTTP 404. | Apple not counted. |
| LINE Design System — https://designsystem.line.me/ | Client-rendered; only the title came back. | Not counted. |
| CLDR summary chart zh_Hant — https://www.unicode.org/cldr/charts/latest/summary/zh_Hant.html | 4 MB page truncated by the fetch tool. The cldr-json files were used instead. | — |

## Searched, nothing public found (not "does not exist")

Taiwan company design systems with a writing / content section. One WebSearch each, query `<company> design system 設計系統 文案 UX writing guideline`. Results were generic English UX-writing articles, portfolios, job posts or case studies; none was a published guide by the company:
LINE Taiwan (designsystem.line.me exists but is client-rendered), Dcard, PChome, KKBOX (a 2022 brand book PDF, English, not opened), KKday, iCHEF, 91APP, Gogoro, Pinkoi, Trend Micro, ASUS, 104人力銀行, 國泰金控 Cathay, SHOPLINE.
Also searched: 「"設計系統" 文案規範 繁體中文 標點符號 全形 按鈕 錯誤訊息」 and 「UX writing 指南 繁體中文 台灣 公開 規範 您 你 產品語氣」 — only blog posts, Medium notes, tool sites and Mainland (Simplified) articles. **So PRAC M = 0.** A Medium note in the search results argues against apologies and against 請 in error messages; it is a personal blog, seen only as a search snippet, and is not used.

Government design system: 數位發展部's FY2026 (115年) plan, per a search result, mentions building a 政府服務設計系統; no published system was found. The only agency guideline found was TIPO's 設計規範書 (2019), whose index page carries no wording, font-family, size or line-height values; sub-pages were not opened in half A.

## Rule areas with no source this round

- **Button label form** (verb vs noun, length, 請 on buttons): no source among MS, MZ, WP; no company guide.
- **Apology in errors**: no source.
- **Empty states**: no source.
- **Success messages**: one MS example only (TW-19); no rule.
- **民國 vs 西元 in consumer UI**: no source (CLDR has the calendar; the 行政院 rule is unread).
- **24-hour vs 12-hour time**: no source.
- **元 vs NT$ in prices; decimals for TWD**: no source beyond CLDR symbols.
- **Units**: no source.
- **Government plain-language guidance**: none found (政府數位服務指引 page has no wording content).
- **Apple / Google style guidance for zh-TW**: Apple's page 404; no Google zh-TW writing guide found (not searched further).

## Half B (typography)

| What | Status |
|---|---|
| CLREQ current Note (04 November 2026): §6 Line & paragraph layout and Appendix A punctuation tables | **Not read.** The fetch tool truncates the ~770 KB page inside §5.5; the repository has no split sources. The 2020 WD truncates before its line-breaking section; the 2017 WD reached §3.1.4 and the start of §3.1.6. Line breaking, compression, hanging, horizontal Han–Latin spacing and line spacing (TW-46 to TW-49, TW-55) therefore rest on the **superseded** Traditional-Chinese editor's draft `zh/index.html` in the repository. A text dump of the current §6 and Appendix A was requested from the orchestrator (2026-11-21). |
| Line length (characters per line) | No figure in any source read. Gap. |
| Line height for screen UI | Only the book-typesetting 行距 range in the superseded draft (TW-55). No Taiwan web source gives one. |
| MOE handbook on mark positions (居正中) | Blocked (above). The centred position rests on CLREQ only. |
| Taiwan government design system with a type scale | None found besides TIPO (2019, one agency). 數位發展部 政府網站服務管理規範 (PDF) unread. |
| Web font stacks published by Taiwan companies | None found (no company design system found). |
| 教育部《國字標準字體》 | Not opened this round (time). It bears on glyph shapes in fonts, not on CSS rules. |

## Not done (time box)

- MOE handbook, 行政院 numeral rule, 文書處理手冊 and 政府網站服務管理規範 await extraction (requested 2026-11-21; nothing had landed in ~/.omd-workers/lang-sources/ when this file was written). When they land, TW-24 to TW-33 (punctuation) and TW-38/TW-41 (dates, numerals) need a pass against them.
- CLREQ current §6 and Appendix A (requested 2026-11-21).
- TIPO sub-pages other than Font, Content and Button were not opened (Form, Status, Light Box may carry message wording).
- Google: no zh-TW writing guide searched beyond the general searches above.
- Every web quote should be re-read on its page by a native reader (extraction-model quotes; glyph widths unverified).
