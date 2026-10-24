# /hangul — Korean-specific writing issues

Some ways Korean prose goes wrong have no English counterpart. Others come from translating out of English or Japanese: frames calqued into Korean, honorific `-시-` attached to a thing, dependent nouns closed up, endings that switch speech level mid-paragraph. This file lists them by family. For each it gives the fix, the situations where it hurts most, and whether `copy-check.mjs` reports it or a reader has to judge it. How each situation should sound is in `situations.md`; real cases from the 2026-10-25 test are in `cases.md`.

Every example sentence here was written for this file. The sources are cited and paraphrased, never copied. Two 국립국어원 guides are under 공공누리 licences that forbid derivative works, so their word lists and examples are not reproduced. From im-not-ai (MIT) only its IDs and figures are cited.

## 0. Calibrate before you flag

**Some patterns that read as translationese are more common in human Korean than in AI output.** im-not-ai measured both corpora (commit `b37e020`):

| Pattern | Human vs AI | How to treat it |
|---|---|---|
| `~에 대해·~에 대한` | humans about 3× more | normal once; flag a run (HW-D4 density) |
| `~을 통해` | humans 2.5–3× more | normal once; flag a run (HW-D4 density) |
| 3rd-person pronouns `그·그녀·그것` | humans 2–3.4× more, but AI uses them with no antecedent about 6× as often | a reader's call: is there an antecedent? |
| `~을 위해` | humans about 1.5× more | not checked |

The patterns that do separate AI output from human writing:

| Pattern | AI vs human | Checker |
|---|---|---|
| the cleft `중요한 것은 ~이다` | about 10× | HW-D3 (per occurrence, FYI) |
| `A가 아니라 B` as the default way to make a point | 9.2× | HW-D4 (three or more per document) |
| a comma right after a connective ending (`빠르지만, 비싸다`) | 4.84× | HW-D4 (density) |
| the passive progressive `~되고 있다` | about 2.5× | HW-D4 (three or more per document) |

국립국어원 still advises against the first group in official documents. So the checker flags one occurrence only when a norm backs it: 「한글 맞춤법」, 「외래어 표기법」, a dictionary headword or an explicit 국립국어원 correction. Everything else is flagged by density, or left to the reader.

Two more cautions:

- **Medical, financial, legal and policy text hedges on purpose.** There, `~할 수 있습니다` and `~일 수 있어요` are the meaning, not a tic. In im-not-ai's records, 40 of 55 assertive rewrites of eye-clinic posts were rolled back.
- **Fix wording, never meaning.** Don't turn a negative claim into a positive one the source didn't make. Don't correct a quotation, a brand name or a legal term the law requires.

## 1. At a glance

"HW-n" means `copy-check.mjs` reports it. "Read" means a person or the agent has to judge it in context, and `cases.md` shows what that judgement looks like.

| Family | Looks like | Fix | Checked | Hurts most |
|---|---|---|---|---|
| English frames (TE) | `결과는 ~을 보여 줍니다`, `회의를 가졌다`, `가장 ~한 것 중 하나`, `당신의`, `필요로 하는` | put the actor first and use the Korean verb | HW-8 for the listed frames; read for the rest | press, deck, report, site |
| Japanese and administrative frames (TJ) | `~함에 있어`, `점검 중에 있습니다`, `구좌`, `익일` | `~할 때`, `점검하고 있습니다`, `계좌`, `다음 날` | HW-8, HW-7 | notice, email, report |
| Passive and causative (PV) | `보여지는`, `잊혀진`, `~에 의해 운영됩니다`, `소개시켜` | `보이는`, `잊힌`, `~가 운영합니다`, `소개해` | HW-8 | everywhere |
| Nouns for verbs (NM) | `점검을 진행합니다`, `만전을 기하겠습니다`, `결제 오류 발생 시 문의 바랍니다` | `점검합니다`, `철저히 관리하겠습니다`, `결제 중 오류가 나면 문의해 주세요` | HW-8 for padded verbs; read for noun stacks | notice, report, docs |
| Length (LN) | three conditions and two dates in one sentence | one fact per sentence; a list for three or more | HW-6 for amounts; read | notice, email |
| Redundancy (RD) | `과반수 이상`, `매 분기마다`, `약 300여 곳`, `진위 여부` | keep one of the two | HW-7 | report, notice, press |
| Vocabulary (VO) | `제고`, `소정의`, `니즈`, `컨펌`, `혁신적인 최적의 솔루션` | plain words; facts instead of adjectives | HW-7 for the plain-word list; HW-12 for unsupported claims; read for buzzwords | site, deck, press |
| Honorifics (HN) | `품절이십니다`, `카드 결제 가능하세요`, `-드리다` on every verb, `박지영 과장 드림` | `품절이에요`, `카드로 결제할 수 있어요`, `-드리다` once, `과장 박지영 드림` | HW-10, HW-D4 | app, email, product |
| Register (RG) | 해요체 beside 합쇼체; 명사형 bullets beside sentences | one level per surface or document; one ending form per list | HW-11, HW-R1·R2, HW-D2 | report, deck, site |
| Spacing (SP) | `할수`, `회의중`, `5회이상`, `가입한지`, `안돼요`, `결제시`, `1천만원` | `할 수`, `회의 중`, `5회 이상`, `가입한 지`, `안 돼요`, `결제 시`, `1천만 원` | HW-2 | app, notice, product |
| Punctuation (PU) | `02:00 ~ 06:00`, `그러나,`, `처리 중..`, `안녕하세요~` in a mail, `14:00 – 14:30` | `02:00~06:00`, `그러나`, `…`, a period, `14:00~14:30` | HW-3, HW-13, HW-D4 | notice, email, report |
| Loanwords (LW) | `타겟`, `스케쥴`, `워크샵`, `화이팅`, `컨퍼런스` | `타깃`, `스케줄`, `워크숍`, `파이팅`, `콘퍼런스` | HW-1 (BLOCK; FYI where no dictionary entry was confirmed) | everywhere |
| Numbers and dates (NU) | `2026.10.24`, `10/24(토)`, `1500000명`, `오후 2시` in a report | `2026. 10. 24.`, `10월 24일(토)`, `150만 명`, `14:00` | HW-3, HW-R3 | report, notice, email |
| LLM formulas (AI) | `~에 대해 알아보겠습니다`, `중요한 것은`, `도움이 되셨길 바랍니다`, `버그 수정 및 성능 개선` | start with the content; end when it ends | HW-D3 | docs, deck, report |
| Drafting debris (DOC) | `※ 실제 수치로 바꿔 주세요`, `[담당자 이름]`, `○○○`, `{name}으로` | fill it in or ask; never ship a note to the writer | HW-D1, HW-1 | every document |

## 2. By family

Each entry: ✗ → ✓, then what reports it and what to watch. IDs in parentheses (KI-…) are the research note's.

### English frames (TE)

- **A thing as the actor** (KI-TE01). ✗ `조사 결과는 사용자 대부분이 알림을 끈다는 것을 보여 줍니다.` → ✓ `조사해 보니 사용자 대부분이 알림을 꺼 두었습니다.` *Read.* Figure captions (`표 2는 지역별 매출을 보여 준다`) and a system that really acts (`이 API는 토큰을 발급합니다`) are fine.
- **`~을 가지다` for "have"** (TE02). ✗ `기자간담회를 가졌다`, `강력한 보안 기능을 가지고 있습니다` → ✓ `기자간담회를 열었다`, `보안 기능이 강력합니다`. *Read.* `관심을 갖다` and `자부심을 가지다` are native idioms.
- **`~에 대해·~을 통해`** (TE03, TE04). ✗ `이번 업데이트를 통해 검색 속도를 개선했습니다.` → ✓ `이번 업데이트로 검색이 빨라졌습니다.` *HW-D4*, only when a document repeats them (§0).
- **`가장 ~한 N 중 하나`** (TE06). ✗ `보안은 가장 중요한 요소 중 하나입니다.` → ✓ `보안은 특히 중요합니다.` *HW-8 FYI.*
- **`~하는 것이 중요합니다`, the cleft** (TE07). ✗ `중요한 것은 속도가 아니라 방향입니다.` → ✓ `속도보다 방향을 먼저 정해야 합니다.` *HW-8, HW-D3 FYI.* A safety note may keep one (`물을 자주 마시는 것이 중요해요`).
- **`~할 수 있습니다` in a run** (TE08). ✗ three feature sentences that each end in `~할 수 있습니다` → ✓ one sentence that joins them. *Read.* UI copy should still say what the user can do (HW-9), and medical and financial hedges stay.
- **`~했었다` for sequence** (TE10). ✗ `지난주 말씀드렸었던 일정` → ✓ `지난주 말씀드린 일정`. *Read.* `-었었-` means a past that no longer holds (`예전에는 유료였었는데`).
- **`당신`, and pronouns without an antecedent** (TE11). ✗ `당신의 비즈니스를 위한 파트너` → ✓ `사업에 꼭 맞는 파트너`. *HW-8 FYI for `당신`; read for pronouns.* A brand voice that chose `당신` keeps it.
- **`-들` after a quantifier** (TE12). ✗ `다양한 기능들`, `모든 데이터들` → ✓ `여러 기능`, `모든 데이터`. *Read.* People keep it (`참석한 학생들이 각자…`).
- **`필요로 하다`, `~하기를 원하십니까`, `~에 위치한`** (TE13). ✗ `현장에서 필요로 하는 기능` → ✓ `현장에 필요한 기능`. *HW-8 WARN* for `필요로 하다`, an explicit 국립국어원 correction. The others are left to the reader.
- **`더 이상 ~않다`** (TE14). ✗ `더 이상 비밀번호를 외울 필요가 없습니다.` → ✓ `이제 비밀번호를 외우지 않아도 됩니다.` *Read.* `더` and `이상` overlap. `더는` also works.

### Japanese and administrative frames (TJ)

- **`~함에 있어`, `~에 있어서`** (TJ01). ✗ `서비스를 이용함에 있어 불편을 드려 죄송합니다.` → ✓ `서비스를 이용하시는 데 불편을 드려 죄송합니다.` *HW-8 WARN* for `~함에 있어`. *HW-8 FYI* for `~에 있어서`, which also fires on the locative `역 앞에 있어서 찾기 쉬워요`, so read each hit.
- **`의` chains and stacked particles** (TJ02). ✗ `고객의 데이터의 보호의 중요성`, `클라우드로의 전환` → ✓ `고객 데이터를 지켜야 하는 이유`, `클라우드로 옮기는 일`. *Read.* `고객과의 약속` is natural. Never drop `의` after a pronoun (`그의 첫 소설`).
- **`-적` stacks** (TJ03). ✗ `정기적이고 지속적인 모니터링을 실시합니다.` → ✓ `꾸준히 점검합니다.` *Read.* Lexicalised adverbs (`기본적으로`) and fixed terms (`법적 근거`) are fine.
- **`중에 있다`, `예정에 있다`, `하에`** (TJ04). ✗ `현재 시스템 점검 중에 있습니다.` → ✓ `지금 시스템을 점검하고 있습니다.` *Read.*
- **Japanese-style 한자어** (TJ05). ✗ `익일 오전 중 등록하신 구좌로 입금됩니다.` → ✓ `다음 날 오전에 등록하신 계좌로 입금돼요.` *HW-7 FYI* for the listed words (`금일`, `익일`, `익월`, `금번`, `구좌`, `잔고` …). A term the law names on a form stays, with an explanation.

### Passive and causative (PV)

- **Double passive** (PV01). ✗ `화면에 보여지는 금액`, `잊혀진 비밀번호`, `공유되어질 예정` → ✓ `화면에 보이는 금액`, `잊은 비밀번호`, `공유할 예정`. *HW-8 WARN,* from a fixed list of passive stems. Single passives on active verbs are standard (`주어지다`, `이루어지다`, `알려지다`), so there is no generic pattern.
- **Needless passive** (PV02). ✗ `본 서비스는 ○○에 의해 운영됩니다.` → ✓ `이 서비스는 ○○가 운영합니다.` *HW-8 FYI* for `~에 의해`. A passive that reads better stays (an expiry, the result of the user's action).
- **Needless causative** (PV03). ✗ `친구를 소개시켜 주면`, `업무 효율을 향상시킵니다` → ✓ `친구를 소개해 주면`, `업무 효율을 높입니다`. *HW-8 FYI* for `소개시키다`. The rest are for the reader, because true causatives exist (`기계를 정지시키다`).

### Nouns for verbs (NM)

- **Padded verbs** (NM01). ✗ `설치를 진행합니다`, `점검을 실시합니다`, `만전을 기하겠습니다` → ✓ `설치합니다`, `점검합니다`, `철저히 관리하겠습니다`. *HW-8 FYI* for `수행`, `실시` and `진행` after an action noun. `행사를 진행했어요` (an event as the object) is natural.
- **Noun stacks inside a sentence** (NM02). ✗ `결제 오류 발생 시 고객센터 문의 바랍니다.` → ✓ `결제 중 오류가 나면 고객센터에 문의해 주세요.` *Read.* A report's 개조식 line and a title are allowed to be noun phrases. A sentence that ends in a verb is not.

### Length (LN)

- **Stacked modifiers** (LN01). ✗ `지난주 공개한 보안 업데이트에서 수정된 문제를 다룬 문서` → ✓ `지난주 보안 업데이트에서 고친 문제는 이 문서에 정리했습니다.` *Read;* a regex can't tell a 관형형 from a topic particle.
- **Several facts in one sentence** (LN02). ✗ `신청은 11월 1일부터 15일까지 누리집에서 가능하며 서류는 우편으로 제출해야 하고 결과는 개별 통보합니다.` → ✓ three sentences. *HW-6* flags three or more amounts or conditions in one sentence; otherwise read.

### Redundancy (RD)

- **겹말** (RD01). ✗ `과반수 이상`, `매 분기마다`, `약 300여 개`, `더불어 함께`, `반드시 필요` → ✓ keep one word. *HW-7 FYI.* `매일` and `매년` are single words.
- **Filler and stacked hedges** (RD02). ✗ `진위 여부를 확인합니다`, `확인 후 회신 드리도록 하겠습니다`, `~할 수 있을 것으로 기대된다` → ✓ `진짜인지 확인합니다`, `확인하고 답장 드리겠습니다`, a plain statement or its source. *HW-7 FYI* for `진위·유무 여부`; read for hedges, which medical and financial text keeps.

### Vocabulary (VO)

- **Hard 한자어 and administrative words** (VO01). ✗ `소정의 절차를 거쳐`, `고객 편의 제고를 위해` → ✓ `정해진 절차를 거쳐`, `더 편하게 쓰실 수 있도록`. *HW-7 FYI* for the listed pairs (`금일`, `상이하다`, `불가합니다` …).
- **Buzzwords and needless English** (VO02). ✗ `고객 니즈를 반영한 원스톱 솔루션`, `시안 컨펌 부탁드립니다` → ✓ `고객이 원하는 일을 한곳에서 끝내는 서비스`, `시안을 확인해 주세요`. *Read.* Investors share TAM and ARR, developers share API and 로그인, and product names stay.
- **Hype and stock adjectives** (VO03). ✗ `최적의 솔루션을 제공합니다`, `업계 최초`, `100% 만족` → ✓ what it does, with its basis. *HW-12 FYI* for claims with nothing behind them. Stock adjectives (`다양한`, `혁신적인`, `원활한`) are left to the reader: `다양한` beside its actual list is fine.

### Honorifics (HN)

- **`-시-` on a thing** (HN01). ✗ `주문하신 커피 나오셨습니다`, `품절이십니다`, `카드 결제 가능하세요`, `재고 있으십니다` → ✓ `커피가 나왔어요`, `품절이에요`, `카드로 결제할 수 있어요`, `재고가 있어요`. *HW-10 WARN.* A question to a person is right (`통화 가능하세요?`, `쿠폰 있으세요?`), and the checker leaves questions alone.
- **Doubled or misplaced honorifics** (HN02). ✗ `김지수 님 귀하`, `어르신분들`, `진행하시겠으십니까` → ✓ `김지수 님`, `어르신들`, `진행하시겠습니까`. *HW-10 FYI* for `님 귀하`; read for the rest.
- **`-드리다` on verb after verb** (the 2026-10-25 test). After an action noun, `-드리다` is a valid humble suffix, written closed up (`설명드리다`, `안내드리다`). It is right where the action is done for the reader. ✗ `공유드리고 … 요청드리며 … 전달드리겠습니다` → ✓ keep it once and use plain verbs for the rest (`요청합니다`, `보내 드립니다`). *HW-D4* when one document uses it three or more times. Don't overcorrect into an archaic verb: told to avoid `요청드립니다`, the test's writer reached for `청합니다`, and the editor marked it down.
- **Your title after your own name** (the test). ✗ `박지영 과장 드림` → ✓ `마케팅팀 과장 박지영 드림`. *HW-10 FYI.* The title goes before the name because after it, it honors the writer.

### Register (RG)

- **Mixed speech levels** (RG01). ✗ `주문이 접수되었습니다. 배송은 내일 시작돼요.` → ✓ `주문을 받았어요. 배송은 내일 시작해요.` *HW-11 WARN* (per file for UI, per long paragraph for documents). A report or deck that slips into 해요체 is *HW-R1*, and 해라체 beside 합쇼체 there is *HW-R2*. A press release narrated in 합쇼체 gets an *HW-11 FYI* under `--context=press`.
- **One list, two ending forms** (the test). ✗ `- 3년 이상 경력자 / - Kotlin 능숙 / - 원활한 소통이 가능하신 분` → ✓ one form throughout. *HW-D2 FYI.*
- **Bullets written as sentences in a report or deck** (the test). ✗ `- 1인분 장보기는 식재료가 남아 버려지기 쉽다` → ✓ `- 1인분 장보기, 남는 식재료`. 개조식 lines end in 명사형. *HW-R5 FYI.*

### Spacing (SP)

- **Dependent nouns** (SP01). ✗ `할수 있어요`, `회의중에는`, `5회이상`, `가입한지 1년`, `비워 두면 안돼요` → ✓ `할 수 있어요`, `회의 중에는`, `5회 이상`, `가입한 지 1년`, `안 돼요`. *HW-2 WARN.* ✗ `결제시`, `정리하는데 30분 걸렸어요`, `한 달에 한번` → ✓ `결제 시` (or `결제하면`), `정리하는 데`, `한 번`. *HW-2 FYI.* Each check is guarded against its look-alike:
  - `그중`, `도중` and `사용중지` are single words;
  - `-ㄴ지` is also the ending "whether";
  - `안되다` is also a word ("go badly");
  - `-는데` is also the ending "but";
  - `비상시` is a dictionary compound.
- **Auxiliary verbs** (SP02). `해 보다` and `해보다` are both allowed; pick one per document. *Read.*
- **Numbers and units** (SP03). ✗ `1천만원` → ✓ `1천만 원`. *HW-2 FYI.* A house style may keep `만원`.
- **Suffixes written apart** (SP04). ✗ `지역 별`, `최신 순` → ✓ `지역별`, `최신순`. *Read.*

### Punctuation (PU)

- **Commas** (PU01). ✗ `그러나, 일부 옵션은…` → ✓ `그러나 일부 옵션은…`. *HW-3 FYI*, following the punctuation appendix's 해설; `즉,` and `반면,` are left to the writer. A comma after every connective ending (`저장하고, 실행하세요`) is *HW-D4* when a document does it often.
- **Quotation marks for emphasis** (PU02). ✗ `우리는 “진짜” 고객 경험을 만듭니다` → ✓ say what is real, or use `‘ ’`. *Read.*
- **Ellipsis** (PU03). ✗ `처리 중입니다..` → ✓ `처리하고 있어요…`. *HW-3 FYI* for two or four dots. Three dots are allowed.
- **A softening `~`** (PU04). ✗ `안녕하세요~ 이번 주 소식이에요~` in a mail or notice → ✓ a period. *HW-3 FYI* in documents. A casual brand's app screens may keep it, and ranges (`3~5일`) are never flagged.
- **Ranges** (the test). ✗ `02:00 ~ 06:00`, `14:00 – 14:30` → ✓ `02:00~06:00`, `14:00~14:30`. *HW-3 FYI.*
- **Parentheses in documents** (the test). ✗ `3분기 (7월~9월)` → ✓ `3분기(7월~9월)`. *HW-3 FYI*, for documents only, because UI labels write `동의 (필수)` by habit.
- **Exclamation marks** (PU05). *HW-13.* None in errors, notices or a report's body.

### Loanwords (LW)

- **Misspellings** (LW01). ✗ `메세지`, `컨텐츠`, `타겟`, `스케쥴`, `워크샵`, `화이팅`, `멤버쉽`, `버젼` → ✓ `메시지`, `콘텐츠`, `타깃`, `스케줄`, `워크숍`, `파이팅`, `멤버십`, `버전`. *HW-1 BLOCK* for 35 pairs checked against the 표준국어대사전: the wrong form has no entry or points to the right one. Eight more follow 「외래어 표기법」 but were not confirmed as dictionary headwords, so they are *HW-1 FYI*: `쉐프`, `파트너쉽`, `캐쥬얼`, `쥬얼리`, `컨퍼런스`, `네비게이션`, `매니져`, `카달로그`. The check applies only at the start of a word, so a brand name such as `W컨셉` keeps its spelling.
- **Standard words that aren't loanwords** (the test). ✗ `붓기` → ✓ `부기`. *Read:* `붓다` ("pour") makes a pattern unsafe.

### Numbers and dates (NU)

- **Dates** (NU01). ✗ `2026.10.24`, `2026. 10. 24`, `10/24(토)까지` → ✓ `2026. 10. 24.`, `10월 24일(토)까지`. *HW-3 FYI.* A slash date is flagged only next to a weekday, `까지`, `부터` or a range, so a fraction stays quiet.
- **Grouping and one convention** (NU02). ✗ `1500000명`, `오후 2시` beside `15:30` → ✓ `150만 명` or `1,500,000명`, `14:00`. *HW-3 FYI* for five or more ungrouped digits before a unit. *HW-R3* flags the 12-hour clock in reports and decks.

### LLM formulas (AI)

- **Meta openers** (AI01). ✗ `이 문서에서는 설치 방법에 대해 알아보겠습니다.`, `원인은 크게 세 가지로 나눌 수 있습니다.` → ✓ `설치는 세 단계입니다.`, `원인은 인증서 만료, 방화벽, DNS 설정입니다.` *HW-D3 FYI.*
- **Closers and nudges** (AI02). ✗ `도움이 되셨길 바랍니다`, `지금 바로 시작해 보세요!` → ✓ drop it, or give a real channel; a button that says what happens. *HW-D3 FYI* for the closing wish; *HW-12* for loss framing.
- **Summary connectives** (AI03). ✗ `이처럼 …. 결론적으로 …` → ✓ the result itself. *Read;* one `따라서` in an argument is normal.
- **Antithesis and transformation** (AI04). ✗ `단순한 메신저를 넘어 일하는 방식의 플랫폼으로 진화합니다.` → ✓ `메신저에 결재와 일정 기능을 더했습니다.` *HW-D4* for `A가 아니라 B` three or more times in one document. A real correction (`환불이 아니라 교환만 됩니다`) carries information.
- **Empty release notes.** ✗ `버그 수정 및 성능 개선` → ✓ name the bug and what changed. *HW-D3 FYI.*

### Drafting debris (DOC)

The 2026-10-25 test found these in 8 of 22 documents. A drafting agent writes them for the person who asked for the document, and the document's readers see them:

- **Notes to the writer.** ✗ `※ 실제 수치로 바꿔 주세요`, `(근무지 주소를 입력해 주세요)`, `> 작성 시 확인 필요` → ✓ ask for the value, or leave it out and say so in your reply. *HW-D1 WARN.*
- **Unfilled placeholders.** ✗ `[담당자 이름]` scattered through a document → ✓ the value, or a question to the user. *HW-D1 FYI.* Where the convention needs the value, a quote's speaker (`○○○ 대표는`) or a signature, keep one visible `○○○` and list it in your reply. Dropping the element instead (`바른걸음 대표는`) breaks the convention, and the 2026-10-25 test's editor marked that down.
- **A particle after a variable.** ✗ `{name}으로`, `{email}을` → ✓ `{name}(으)로`, or put a noun before it (`{email} 주소로`). *HW-1 FYI,* because the right particle depends on the value.

## 3. Where each situation hurts most

| Situation | Families to watch first |
|---|---|
| report | RG (bullets that mix forms), NM (noun stacks in sentences), PU and NU (ranges, dates, units), RD, TE09 (`~되고 있다`) |
| deck | TE07 and AI04 (cleft, antithesis), VO (buzzwords for a general evaluator), RG (one form per slide), DOC |
| site, product | TE11 (`당신`), VO03 (claims), AI02 (nudges), HN01 (`구매 가능하세요`), one term per concept |
| app | SP01, HN01, PV01, LW01, RG01 (the HW-1…14 core) |
| notice | TJ01 and TJ04, NM02, LN02, PU (ranges, `~`), NU01, the order of facts |
| email | HN (over-politeness, sign-off), RD02 (filler), TE10, PU03 and PU04, DOC (placeholders) |
| press | RG (해라체 narration), TE01 and TE02 (`보여 줍니다`, `가졌다`), PV02, AI03, VO03 |
| docs | NM01 (`설치를 진행합니다`), TE11 (`당신`), AI01, one term per concept, empty release notes |
| hiring | RG (one form per list), VO (personality boilerplate), DOC (template instructions) |

## 4. What no checker sees

These came up most often in the 2026-10-25 test, and none of them can be matched by a pattern:

- **Information out of order or repeated** (16 of 22 documents). This covers a summary restated at the end, background before the lead, and the same figure on three slides.
- **One thing under two names** (10 of 22). `화상 미팅` and `화상 회의` in one mail, `할 일` and `액션 아이템` on one page.
- **Subject, connective or collocation that doesn't agree** (10 of 22). `집밥은 시간이 부족합니다`, `1위를 만듭니다`.
- **Pronouns with no antecedent, stacked modifiers, and meaning.**

Read for them before running the checker. A clean run says nothing about them.

## 5. Sources

Read on 2026-10-25.

| Source | Publisher · version | URL |
|---|---|---|
| 「한글 맞춤법」 with 해설 and the punctuation appendix | 국립국어원; 문화체육관광부 고시 제2017-12호 | https://korean.go.kr/kornorms/regltn/regltnView.do?regltn_code=0001 |
| 「외래어 표기법」 | 국립국어원; 문화체육관광부 고시 제2017-14호 | https://korean.go.kr/kornorms/regltn/regltnView.do?regltn_code=0003 |
| 「표준국어대사전」 headword searches | 국립국어원, online edition | https://stdict.korean.go.kr |
| 「(개정판) 한눈에 알아보는 공공언어 바로 쓰기」 | 국립국어원 공공언어과, 2024-06 PDF; 공공누리 제4유형 (cited, not adapted) | https://www.korean.go.kr/front/etcData/etcDataView.do?mn_id=&etc_seq=699&pageIndex=1 |
| 「쉬운 공문서 쓰기 길잡이」 | 국립국어원, 2022-12; 공공누리 제3유형 (cited, not adapted) | https://www.korean.go.kr/front/etcData/etcDataView.do?mn_id=&etc_seq=700&pageIndex=1 |
| 「새국어생활」 22(1) 「번역과 국어」: 김순영, 김정우, 김한식, 강주헌 | 국립국어원, 2012 | https://www.korean.go.kr/nkview/nklife/2012_1.html |
| 「개선이 필요한 공공언어 30선」 survey release (n = 3,000) | 국립국어원 · 문화체육관광부, 2026-02-12 | https://www.korean.go.kr/front/board/boardStandardView.do?board_id=6&b_seq=1039&mn_id=184 |
| Korean Localization Style Guide | Microsoft, 2024-09-05 | https://aka.ms/korean-styleguide |
| AI 한글 티 분류 체계 and its corpus measurements | im-not-ai (MIT), commit `b37e020` (2026-10-12) | https://github.com/epoko77-ai/im-not-ai |

## Unverified (not used as rules)

- **`가장 ~한 N 중 하나` as an error.** No 국립국어원 or dictionary source was found. It stays an FYI because it inflates and hedges a claim at once.
- **`미리 예약`, `다시 재-` as 겹말.** These are widely used and not in the sources read. `미리 예약` is an FYI and `다시 재-` is not checked.
- **That `~했었다` is English past-perfect translationese.** Only the dictionary sense of `-었었-` was confirmed.
- **`여러분들`.** It is redundant by the dictionary sense, but no ruling was found. Not checked.
- **`-실게요`** (`이쪽으로 오실게요`). Still unverified, as `ux-writing.md` records.
- **im-not-ai's ratios.** They are quoted from its repository; the corpora were not re-measured here.
