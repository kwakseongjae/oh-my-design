# /kana — rule sources

Every rule that `SKILL.md` cites, with its source, the quote, its scope, its test and its strength. **Development draft (2026-11-13).** No native Japanese reader has reviewed this file yet.

## How this file was made

- Each rule block below is copied line for line from the two rule files revised after the independent check of 2026-11-12: `research-typography/rules.v2.md` (JT-01 … JT-32) and `research-writing/rules.v2.md` (JW-01 … JW-70). Headlines, Source, Quote, Scope, Test, Strength and `Unsourced for web:` lines are unchanged, including the markers `[raw]` (read from source markup or the rendered PDF page) and `[exact]` (re-requested with the original punctuation).
- One line is added to every block: **Standing**, the document status of each source the rule rests on. A source the block names only for contrast, or says does not count, is listed after "Named in the block but not relied on" (the same split as the Rests on / Mentioned columns of `sources.md`). Three writing rules (JW-32, JW-33, JW-70) also get a **Reviewer note** carrying a glyph-level doubt recorded in `research-writing/changes.md`.
- Quotes from web pages came through a text extraction step unless marked `[raw]` or `[exact]`. PDF quotes were transcribed from page images. Both kinds should be re-read against the source by a native reader before the skill ships.
- No rule was added, and no wording was strengthened. A rule's `Unsourced for web:` line records something the first draft claimed and the check took out. The skill never applies it.

## Strength labels (as the rule files use them)

| Label | Meaning |
|---|---|
| STD | Typography: normative text of a CSS spec at Candidate Recommendation Draft (CSS Text 3, CSS Text Decoration 3). Writing: set by a 内閣告示 within the scope the 告示 gives itself (only 外来語の表記 was read directly). No rule here has STD as its only support, and neither STD entry in the writing file should drive a blocking check. |
| WD | Defined in CSS Text 4, a W3C Working Draft. Values and initial values may still change. No rule rests on WD alone. |
| AUTH | Recommended or described by an authority: W3C Working Group Note (JLREQ, about book composition), W3C i18n, the Japanese government (デジタル庁 DADS; 文化審議会 建議 and 答申; 出入国在留管理庁・文化庁). |
| PRAC(n) | Practice in n company or industry guides read. Only SmartHR and JTF were opened, so n is at most 2, and SmartHR is one company's product rules. |
| VENDOR | Browser, OS or font vendor documentation (MDN, browser-compat-data, Chrome, Microsoft Typography, Google). |
| DERIVED | Follows from quoted text; no source states the advice itself. |

Labels inside the rules: "book composition (JLREQ); no web source" marks a description of book practice that no web source carries to the web. "Scope:" says what the source itself covers; using the rule outside it is an extension, and the block says so where the rule file does.

## Scope keys (writing)

- **GK** 外来語の表記 (内閣告示): a よりどころ for 「一般の社会生活」; excludes specialist fields, individuals' spelling and proper nouns. Whether software UI is general social life or a specialist field is not said.
- **KB** 公用文作成の考え方（建議）+ 解説: government documents (法令, 告示・通知等, 記録・公開資料等, 解説・広報等). Product UI is not in its scope.
- **KG** 敬語の指針 (答申): keigo in general social life, spoken and written.
- **YN** やさしい日本語ガイドライン: writing for foreign residents whose first language is not Japanese.
- **JTF** JTF日本語標準スタイルガイド（翻訳用）: Japanese produced in commercial translation; counted as covering product manuals and websites (JTF 2.2.1).
- **SH** SmartHR Design System: SmartHR's own products, help pages and releases.

## Layout

1. Applied by the skill: typography for web UI (22 rules).
2. Applied by the skill: writing (70 rules).
3. Background (print) — not applied by the skill (10 entries): the four that `rules.v2.md` moved to "Background, not rules" (JT-16, 18, 23, 24) and the six whose claim is book composition with no web leg of its own (JT-03, 04, 06, 10, 11, 31).

Source URLs and document status, by source: [sources.md](./sources.md). The live-site measurement the skill quotes beside these rules: [measured-jp.md](./measured-jp.md).
