# /kana writing, second pass — gaps (2026-11-21)

What this pass looked for and did not find, and pages that blocked it. A gap is a finding: the skill should not state a rule where this file says there is no source.

## The nine gaps from the brief

| # | Gap | Status after this pass | What is still missing |
|---|---|---|---|
| 1 | Apology in errors | **Partly sourced.** MS §5.4.2 "Sorry" states when (serious failure) and how (「申し訳ございません」 as its own sentence; never 「すみません」): UW-58. It disagrees with WordPress (UW-11: drop the apology). | No company product guide and no government page read states when to apologise. The pair named as this gap in the first gaps.md (申し訳ございません／申し訳ありません): MS names only the first; no source read compares the two. |
| 2 | ください versus お願いします | **Partly sourced.** MS states 「...してください。」 for instructions (adds to UW-10) and an お／ご form for a listed set of verbs (UW-59, disagrees with SmartHR). | お願いします: no source in either pass, MS included. |
| 3 | Button pairs; destructive button wording | **Partly sourced.** Abort label 「キャンセル」 and the delete pair 「削除」 right / 「キャンセル」 left (SmartHR, UW-60, UW-61); キャンセル versus 閉じる (Ubie, UW-60). | はい／いいえ versus OK／キャンセル and which pair answers which question: none (MS, SmartHR, Ubie, DADS all silent). A strengthened destructive label: none. Only one company guide states the destructive label. |
| 4 | Confirmation-dialog text | **Sourced.** MS (UW-62: 「...しますか?」, not 「....してもよろしいですか?」); SmartHR and Ubie (UW-63 … UW-65). | Where the question goes (title or body) is a recorded disagreement (UW-63). |
| 5 | Empty states | **Partly sourced.** SmartHR only (UW-66, UW-67). | No second company guide, no government page, nothing in MS. First-use (onboarding) empty states: nothing beyond SmartHR's add button. |
| 6 | 。 at the end of a button label or short UI string | **Not sourced.** | MS says buttons are noun phrases and message sentences take 「...してください。」, but states nothing about 。 on buttons. Examples only (SmartHR buttons without 。, SmartHR empty-state message with 。). |
| 7 | 円 versus ¥; currency notation | **Partly sourced.** Tax-inclusive price display is law (NTA, UW-68). 円 versus ¥: one university-website guide (ISCT, UW-69). | No company product guide, no government design page and nothing in MS on 円 versus ¥. Code point of ¥ (U+00A5 vs U+FFE5) not verified anywhere. |
| 8 | Katakana long vowel and compounds, Microsoft's position | **Sourced** (MS read in full; adds to UW-36, UW-37). | The method stays a three-way disagreement (Mozilla, WordPress, MS). The compound-space rule rests on typed spaces in a layout extraction (see below). |
| 9 | MS on tone against UW-06 … UW-09 | **Sourced.** Adds to UW-06 and UW-09; UW-70 (no 尊敬語／謙譲語 except supplier–customer material). | MS's criterion for keigo differs from Ubie's (UW-08); recorded, not reconciled. |

Korean → Japanese faults (area 9 of the first brief): no published source met in this pass; not searched at length, as briefed.

## Pages retried or opened that gave nothing

| Page | Result |
|---|---|
| Apple HIG (ja) 表現 — https://developer.apple.com/jp/design/human-interface-guidelines/writing | Retried once. HTTP 200, title only, body empty (client-rendered). Same as the first pass. Apple not counted. |
| freee vibes — https://vibes.freee.co.jp/ | Retried once. HTTP 200, Storybook shell only. Same as the first pass. freee not counted. |
| SmartHR ActionDialog, Ubie MessageModal | Opened; nothing beyond the pages used. |
| Ameba Spindle (site search) | No dialog, empty-state or error-message page found. |
| DADS (site search) | No empty-state or no-data pattern found; the deletion guidance is the モーダルダイアログ page already used (UW-22). |

## Searched, no further company guide found (gaps 1–5)

Search results for apology, request forms, empty states and delete dialogs were blog posts and vendor articles (for example uxmilk, NOROSHI, pixso, fumufumuUI, mach-tools, SeleQt, a Qiita summary, a note.com memo). They are not sources and were not used. The one new published guide found was Science Tokyo's (ISCT), and its index has no apology, error, dialog, empty-state or ください text. Queries are in sources.json.

## Quote-fidelity points to check on the page or the PDF

- **MS long-vowel count column.** In 「4 (メ, モ, リ, ―)」 and 「6 (プ, ロ, シ, ー, ジ, ―)」 (§4.1.11, L1582, L1584) the counted mark is U+2015 HORIZONTAL BAR; elsewhere it is U+30FC. Probably a text-layer artefact.
- **MS compound spaces.** 「ダイアログ△ボックス」 (§4.1.4) against 「ダイアログボックスが表示されます。」 (§4.2) and 「ダイアログ ボックス」 (§4.1.9, §5.4.7) in the same extraction. The typed space is the weakest thing a layout extraction carries.
- **MS question mark.** U+003F throughout, except §4.1.8 L1019 (U+FF1F).
- **SmartHR and Ubie question marks.** Reported full-width ？ by the extraction model; SmartHR's U+3000 after ？ also reported, not verified.
- **Ubie's own typos kept as on the page:** 「体現止め」, 「疑問系」 (UB-am).
- **NTA example 7,** 「10,000円（税込価格11,000円）」: returned identically by two fetches, but it puts the pre-tax figure first; check on the page before using it as an example.
- **ISCT ¥:** 半角 per the page's words; code point not verified. ISCT and SH-ed were each read in one pass.

## Not touched in this pass (unchanged from the first gaps.md)

A guide that adopts ユーザ; 「〜になります」 and 「〜のほう」; JIS Z 8301; the 告示 texts. A script search of the MS extraction finds no 「になります」 at all, and its 「のほう」 occurrences are in its own explanatory prose, not rules.
