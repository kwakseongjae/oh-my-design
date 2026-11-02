# /hangul — Korean writing cases

Real cases of Korean that reads wrong, sorted by situation, each with the fix and what in Korean makes it wrong. They come from a test on 2026-10-25, not from imagination: every "Before" below is a sentence an agent actually wrote.

## How the cases were collected

- **Requests.** Eleven situations, each a one-paragraph request a person would give an agent: a quarterly report to a team lead, a Series A pitch deck, a B2B SaaS landing page, a budgeting app's screens, a maintenance notice, a first-contact partnership e-mail, a startup's press release, a CLI's README and release notes, a front-end job post, an orthopedic clinic's treatment page, and a district office's support-program page.
- **Writer.** Claude Sonnet 5.5 through Claude CLI, twice per situation (22 documents). Each run had a fresh folder outside the repository, with user settings, plugins, MCP servers and skills off, and no `/hangul`.
- **Readers.**
  - `copy-check.mjs`, with each document's situation.
  - A blind editor pass: Claude Opus 5.5 with one fixed rubric (register, convention, flow, diction, mechanics, 1–5 each), told to quote every phrase a Korean reader would trip on.
  - The lead agent of the session (Claude Opus 5.5), which checked every case below against the sources in `situations.md` and `korean-issues.md` and rewrote the fix where the editor's own fix was awkward. No human linguist reviewed them.
- **Limits.** One model family, two runs per situation, an LLM editor. The cases show what to look for, not how often any model does it. The writer was already good: it got the app screens nearly right, and the trouble sat in documents.

## What came up

Documents out of 22 with at least one case of the kind:

| Kind | Documents | Checker |
|---|---|---|
| Information out of order, or repeated (a summary restated at the end, the same figure on three slides) | 16 | — (needs a reader) |
| Stock phrases and empty abstractions (고도화, 선순환, 시대를 연다, 문화를 지향합니다) | 11 | partly (HW-12 for unsupported claims) |
| Range, parenthesis and middle-dot marks (`02:00 ~ 06:00`, `14:00 – 14:30`, `월 20만 원 (최대…)`) | 10 | HW-3 |
| One thing, two names or two spellings (화상 미팅 / 화상 회의, 할 일 / 액션 아이템, `월·화` / `수요일`) | 10 | — |
| Subject, connective or collocation that doesn't agree (집밥은 시간이 부족합니다, 1위를 만듭니다) | 10 | — |
| Translationese (~을 통해, ~에 대한 접근성, 하나의, ~을 바탕으로 만들어진) | 9 | partly (HW-8; HW-D4 when a document repeats a frame) |
| Notes to the writer or unfilled placeholders left in the document | 8 | HW-D1 |
| Spacing, standard words and loanword spelling (정기배송, 요구사항, 붓기, 컨퍼런스) | 8 | partly (HW-1, HW-2) |
| Endings mixed: 명사형 items beside full sentences, 해요체 beside 합쇼체 | 6 | HW-11, HW-D2, HW-R1 |
| Over-politeness (-드리다 on verb after verb, thanking before the reader has done anything) | 5 | partly (HW-D4 when -드리다 runs to three) |

## Cases by situation

### 보고서 — a report to a team lead

| Before | After | What is wrong in Korean | Check |
|---|---|---|---|
| `# 3분기 업무 보고서` | `# 3분기 업무 보고: 가입자 목표 120% 달성, 결제 안정화가 과제` | A topic title makes the reader open the body to find the point. A Korean report title carries the content and the direction. | — |
| `- 신규 가입자가 목표를 2만 명 초과 달성했습니다.` (in a 개조식 list) | `- 신규 가입자 12만 명, 목표 대비 2만 명 초과` | A report's bullets are 개조식, ending in 명사형. A full 합쇼체 sentence in a bullet reads like a letter. | HW-D2 when the list mixes |
| `원인과 재발 방지 대책은 별도로 정리해 공유드리겠습니다.` | `원인과 재발 방지 대책은 따로 정리해 공유하겠습니다.` | '공유드리다' is a valid form, since -드리다 attaches to action nouns. But a report to one's own lead keeps a plain register, and the humble suffix adds politeness it doesn't need. A style call. | HW-D4 when repeated |
| `4분기 결제 모듈 교체를 통해 근본적으로 해소할 계획입니다.` | `4분기에 결제 모듈을 교체해 근본적으로 해소할 계획입니다.` | '~을 통해' is the English "through"; Korean says it with a verb. One use is normal Korean, so only a run is flagged. | HW-D4 when repeated |
| `매출 기회 손실과 사용자 불편이 있었을 수 있습니다.` | `결제 장애 80분 동안 매출 기회 손실 발생(규모 산정 중)` | A hedge where a report should state what is known and what is still being measured. | — |
| `## 5. 맺음` … `3분기에는 성장 지표가 목표를 넘어섰습니다.` | (delete; the summary already says it) | A closing chapter that repeats the summary is letter form, not report form. | — |

### 피치덱 — Series A slides

| Before | After | What is wrong in Korean | Check |
|---|---|---|---|
| `- 월 구독자 8,200명, 월 매출 4.1억 원` / `- 재구독률 72%로 검증된 반복 구매 모델` / `- 시리즈 A로 전국 확장을 시작합니다` | last line: `- 시리즈 A로 전국 확장 시작` | Two 명사형 lines and one 합쇼체 sentence on one slide. A deck keeps one ending per list, and its rhythm breaks when they mix. | HW-D2 |
| `배달 음식은 비싸고 자극적이며, 집밥은 시간이 부족합니다.` | `배달 음식은 비싸고 자극적이며, 집밥을 해 먹기에는 시간이 부족합니다.` | It is the person who lacks time, not 집밥: subject and predicate don't agree. | — |
| `시리즈 A로 전국 단위 반찬 구독 1위를 만듭니다` | `시리즈 A로 전국 반찬 구독 1위에 오릅니다` | One reaches (오르다) first place; one doesn't make (만들다) it. | — |
| `- ※ 시장 규모 수치(TAM/SAM)는 출처 확인 후 이 슬라이드에 추가하세요.` | (move to the message to the requester) | An instruction to the writer, left on a slide investors will read. | HW-D1 |
| 8,200명 on the cover, the traction slide and the market slide | each slide keeps its own message; the figure lives on the traction slide | One slide, one message. A figure repeated three times blurs what each slide is for. | — |

### 랜딩 페이지 — a B2B SaaS

| Before | After | What is wrong in Korean | Check |
|---|---|---|---|
| `…발언자를 구분해 기록합니다. 전문 용어와 고유명사도 한 번 등록하면 다음부터 정확하게 인식해요.` | `…발언자를 구분해 기록합니다. 전문 용어와 고유명사도 한 번 등록하면 다음부터 정확하게 인식합니다.` | 합쇼체 and 해요체 in one paragraph: the voice changes mid-thought. | HW-11 |
| `할 일` in the hero, `액션 아이템` in a feature body | `할 일` throughout | One concept, two names, and one of them an English loan the page doesn't need. | — |
| `한국어 발화를 정확하게 텍스트로 옮깁니다` | `한국어로 나눈 대화를 정확하게 글로 옮깁니다` | '발화' is a linguistics term; a buyer reads it as jargon. | — |

### 앱 화면 — a budgeting app

| Before | After | What is wrong in Korean | Check |
|---|---|---|---|
| `"{email}로 인증 메일을 보냈어요."` | `"{email} 주소로 인증 메일을 보냈어요."` | The particle after a variable depends on the value: 'kim@daum.net' wants 으로 (넷으로). Put a noun before the particle, or write (으)로. | HW-1 |
| `"button_change_email": "이메일 주소 변경"` beside `"인증 메일 다시 보내기"` | `"이메일 주소 바꾸기"` | Buttons on one screen share one form; a bare 한자어 noun among verb-form buttons reads stiff. | — |

### 공지 — a maintenance notice

| Before | After | What is wrong in Korean | Check |
|---|---|---|---|
| `11월 5일 02:00 ~ 06:00` | `2026년 11월 5일(목) 02:00~06:00` | The range mark attaches on both sides; a notice gives the weekday so readers place the date at a glance. | HW-3 |
| `점검 전에 필요한 로그인과 결제를 미리 마쳐 주세요.` | `결제가 필요하면 점검 전에 마쳐 주세요.` | One doesn't "finish a login in advance": the collocation breaks. | — |
| `이용에 참고해 주세요.` in a notice written in 합쇼체 | `이용에 참고하시기 바랍니다.` | A -세요 request drops the register of an institution's 합쇼체 notice, and '이용에 참고하다' is itself awkward. | — |
| '변경' four times in two sentences (`변경 사항`, `규칙 변경`, `변경할 때`, `변경된 규칙`) | `점검 후 바뀌는 점` … `새로 정하거나 바꿀 때부터 새 규칙이 적용됩니다` | The same 한자어 repeated in a short span reads heavy. | — |

### 이메일 — first contact

| Before | After | What is wrong in Korean | Check |
|---|---|---|---|
| `갑작스러운 연락에도 읽어 주셔서 감사합니다.` (the opening line) | `갑작스럽게 연락드려 양해를 부탁드립니다.` | Thanking someone for reading before they have read. | — |
| `바쁘신 중에 시간 내 주셔서 감사합니다. 회신 기다리겠습니다.` / `감사합니다.` | `바쁘신 중에 읽어 주셔서 감사합니다. 회신 기다리겠습니다.` (one thanks) | They haven't given any time yet, and 감사합니다 closes twice. | — |
| `부담 없이 30분 화상 미팅을 요청드립니다.` | `편하실 때 30분 정도 화상으로 이야기 나눌 수 있을까요?` | '부담 없이' modifies the sender's act instead of the reader's. A question leaves the reader room to decline. '요청드립니다' itself is a valid form. | — |
| `10월 27일(화) 14:00 – 14:30` | `10월 27일(화) 14:00~14:30` | A spaced dash for a range is an English habit; Korean writes ~. | HW-3 |

### 보도자료 — a launch release

| Before | After | What is wrong in Korean | Check |
|---|---|---|---|
| `일상 속 걸음 습관 관리 시대 연다` (subhead) | `스마트폰으로 걸음걸이를 기록하고 고치는 앱` | '~시대 연다' is the stock press-release flourish; it carries no information. | — |
| `…11월 3일 정식 출시한다고 밝혔다.` | `…11월 3일 정식 출시한다고 ○일 밝혔다.` | A Korean release's lead states the announcement date: '~한다고 ○일 밝혔다'. | — |
| `바른걸음 대표는 "…"며` | `○○○ 바른걸음 대표는 "…"며` | The first quote names the speaker as name, company, title. | — |
| `지속적으로 확장해 나갈 계획이다` | `계속 넓혀 갈 계획이다` | The closing stock phrase, and a heavier word than the sentence needs. | — |

### 기술 문서 — README and release notes

| Before | After | What is wrong in Korean | Check |
|---|---|---|---|
| `> 작성 시 확인 필요: 작업 폴더에 docpack 소스가 없어서 …` | (move to the PR description) | A note to the maintainer, left in a page users read. | HW-D1 |
| `문서의 제목을 바탕으로 만들어진 목차` | `문서의 제목으로 만든 목차` | '~을 바탕으로 만들어진' is "generated based on" in Korean words. | — |
| `하나의 PDF로 묶어 줍니다` | `PDF 하나로 묶어 줍니다` | '하나의 + noun' is "a single …"; Korean puts the count after the noun. | — |
| `**한글 폰트 깨짐 수정**: PDF에서 한글이 깨져 보이던 문제를 고쳤습니다.` (under "버그 수정") | `**한글 깨짐**: PDF에서 한글이 깨져 보이던 문제를 고쳤습니다.` | 수정 in the section, 수정 in the label and 고쳤습니다 in the line say the same thing three times. | — |

### 채용 공고 — a front-end engineer

| Before | After | What is wrong in Korean | Check |
|---|---|---|---|
| `- **근무 위치:** (근무지 주소를 입력해 주세요)` | `- **근무 위치:** 서울 강남구 ○○로 00` (or leave it out and tell the requester) | A form instruction published to applicants. | HW-D1 |
| `6,000만 원 ~ 8,000만 원` | `6,000만~8,000만 원` | The range mark attaches, and the shared unit is written once. | HW-3 |
| `컨퍼런스` | `콘퍼런스` | 외래어 표기법 spelling (FYI: not confirmed as a dictionary headword). | HW-1 |
| `투명하게 소통하며 빠르게 배우고 개선하는 문화를 지향합니다` | `결정은 슬랙 채널에 남기고, 회고는 격주로 합니다` | Every post says this; a concrete practice tells the applicant something. | — |

### 병원 홈페이지 — a clinic's treatment page

| Before | After | What is wrong in Korean | Check |
|---|---|---|---|
| `붓기` | `부기` | Standard spelling. Not checked: '붓다' ('pour') would make a pattern misfire. | — |
| `마감 40분 전까지 치료가 시작되어야 합니다.` | `마지막 치료는 진료 마감 40분 전에 시작합니다.` | A passive that hides who acts and what the patient should do. | — |
| `당일에는 … 장시간 음주를 피해 주세요.` | `당일에는 … 과음을 피해 주세요.` | Drinking is measured by amount, not time: the collocation is off. | — |
| contraindications placed after the aftercare section | right after "이런 분께 도움이 됩니다" | The reader needs "is this for me?" before "what to do afterwards". | — |
| `※ 위 시간과 연락처, 비용 등은 예시입니다. 게시 전에 의원 실제 정보로 바꿔 주세요.` | (delete; tell the requester) | A note to the site admin, shown to patients. | HW-D1 |

### 구청 안내 — a support program

| Before | After | What is wrong in Korean | Check |
|---|---|---|---|
| `월 20만 원 (최대 12개월, 총 240만 원)` | `월 20만 원(최대 12개월, 총 240만 원)` | A parenthesis attaches to the word before it. | HW-3 |
| `월세 부담을 덜어 드리기 위해, 무주택 청년에게 월세를 지원합니다.` | `무주택 청년의 월세 부담을 덜 수 있도록 월세를 지원합니다.` | '-어 드리다' in an institution's notice is over-polite, and the comma after '위해' isn't needed. | — |
| `신청 전에 문의처에서 확인해 주세요.` | `신청 전에 문의처로 문의해 주세요.` | 문의처 is whom you ask, not where you check: the particle is wrong. | — |
| The summary sends readers to "신청 방법", which sends them to "문의처" | say how to apply in "신청 방법" | A loop: the page never says how to apply. | — |

## With the skill: the same requests again

The same eleven requests went to the same writer, with `/hangul` in the folder and one line asking it to follow `SKILL.md`. The editor and its rubric were the same as before, still blind to which arm wrote what.

### Setup

| | Without (A) | With the skill (B′) | After the fixes below (B″) |
|---|---|---|---|
| Documents | 22 | 22 | 6 (deck, e-mail, press × 2) |
| Turns allowed | 20 | 40 | 40 |
| Tools | file edits; Bash was not pre-approved, so non-interactive mode denied it | file edits, and `node` pre-approved so it could run `copy-check.mjs` | same as B′ |
| Writer cost | $0.92 | $4.29 | $1.24 |

The editor's cost was not recorded.

### Editor's scores

Each dimension is 1–5, and the total is out of 25. The B″ column is B′ with its deck, e-mail and press documents replaced by the six re-runs.

| Dimension | A | B′ | B″ |
|---|---|---|---|
| register | 4.50 | 4.82 | 4.82 |
| convention | 3.91 | 4.45 | 4.45 |
| flow | 4.32 | 4.41 | 4.55 |
| diction | 4.05 | 4.09 | 4.14 |
| mechanics | 4.27 | 4.77 | 4.86 |
| **total** | **21.05** | **22.55** | **22.82** |
| issues quoted per document | 7.55 | 4.32 | 3.82 |

Situations that scored higher with the skill: 8 of 11. Mean totals, A → B″:

| Situation | A | B″ | What the editor's quotes show |
|---|---|---|---|
| report | 21.0 | 24.5 | A's quotes: 개조식 not applied (×2), a parenthesis spaced off, `-드리다`, a summary that didn't match the body. B′'s three quotes were a unit, a term and a repetition |
| deck | 17.0 | 20.0 | register rose from 3 to 4.5. The deck is still the weakest situation: figures repeated across slides, headlines restated in the body |
| landing | 23.0 | 23.5 | A mixed 해요체 and 합쇼체; B′ didn't |
| app screens | 24.0 | 23.0 | worse. The skill writes `닫기` on a dialog button that only closes (the Apps in Toss rule), and the editor expected `취소`. The rule stays because it is sourced |
| notice | 20.5 | 22.5 | the weekday and a clearer time window were added. B′ still mixed in one 해요체 request, and used colloquial words |
| e-mail | 23.0 | 22.0 | worse at first (20.0), then fixed in part: see below |
| press | 22.0 | 21.5 | about even. Both arms repeated the lead in the body |
| docs | 22.0 | 24.0 | A left a maintainer's note and a meta heading, and wrote `하나의` and `만들어진`. B′ had two minor quotes |
| hiring | 20.5 | 24.0 | A left template instructions (×4), spaced its ranges and mixed endings in a list. B′'s quotes were `의` overuse (×2) and one collocation |
| clinic page | 19.5 | 21.5 | ranges, weekdays and the writer's memo were fixed. Order and wording issues remain |
| district office page | 19.0 | 24.5 | A left notes to the writer (×3), spaced parentheses off (×4) and used `-드리다` (×2). B′'s only quotes were dates without the year (×2) |

### What `copy-check.mjs` found

Documents with at least one finding, A → B′. B′ ran the checker itself, so part of this drop is by construction. The editor's scores above are the independent measure.

| Rule | A | B′ |
|---|---|---|
| HW-D1, a note to the writer or a placeholder left in | 14 | 1 |
| HW-3, ranges, dates, parentheses | 16 | 3 |
| HW-11, speech levels mixed | 4 | 0 |
| HW-D2, one list with two ending forms | 6 | 0 |

### What the test changed in the skill

B′ scored worse than A on e-mail (20 against 23). The editor's quotes showed why, and they led to four changes. B″ re-ran the deck, the e-mail and the press release with those changes:

- **The -드리다 rule went too far.** `-드리다` after an action noun is a valid humble suffix (`설명드리다`, `요청드리다`). The skill had called `요청드립니다` over-polite, so the writer replaced it with `청합니다`, which reads archaic. The rule is now a note on a run of three or more.
- **Slots the convention needs were being dropped.** Told never to leave a placeholder, the writer wrote `바른걸음 대표는` with no name and signed a mail with the company alone. A slot the convention needs now keeps a visible `○○○` and is listed in the reply.
- **E-mail request forms.** The editor read `알려 주십시오` as an order, `~하시기 바랍니다` as a public notice, and a bare `요청합니다` as blunt on first contact. The card now gives the forms to use, and puts the sender's introduction before the ask.
- **Slide bullets as sentences.** A slide whose bullets all ended in `~다` read as prose. HW-R5 now flags it.

E-mail rose to 22 and the deck to 20, and the press release stayed at 21.5.

One later change to the e-mail card was not re-run: writing `세 일정` instead of `세 시간`, which reads as three hours.

### Limits

- One writer model, and two runs per situation (one per re-run cell). The editor is an LLM from the same family as the writer.
- The arm with the skill had more turns and could run `node`.
- Documents s06–s11 of B′ ran with a `copy-check.mjs` whose '가장 ~ 중 하나' FYI was broader than at the commit they started from.
- These numbers show direction, not size.
