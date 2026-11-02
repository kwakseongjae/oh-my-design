# /hangul — Korean writing by situation

The same facts are written differently in a report to a team lead, a slide for an investor, a notice to the public, an e-mail to a stranger and a press release. This file is how an expert Korean writer changes the writing between those situations. For each situation it gives five settings:

- **말투**: speech level, register and attitude;
- **작성 방식**: how a line or a sentence is built;
- **흐름**: the order information comes in;
- **어휘**: which words to use;
- **표기**: numbers, dates and marks.

It also gives the ways AI-written or translated Korean typically fails there, fixes for them, what decides when sources disagree, and what `copy-check.mjs` reports.

DESIGN.md's voice, speech level and house spelling still win over every situation. Korean-specific problems that cut across situations (translationese, noun stacks, over-politeness, spacing) are in `korean-issues.md`; real cases from the 2026-10-25 test are in `cases.md`.

Law is not this file's subject. Some genres carry legal wording (medical advertising, financial disclosures, ad messages, job-post anti-discrimination rules), and laws change. Where a genre's writers all follow such wording, it appears here as a durable principle, never as a clause, a figure or a date. Have whoever owns compliance check the current text, because a clean checker run is not legal clearance.

Tiers as in `ux-writing.md`:
- **SPEC**: orthography and 국립국어원 norms.
- **DS**: a published guide (국립국어원, a ministry form, a company's public writing guide).
- **DATA**: a measured or sampled result, with its n.
- **OP**: a practitioner source, or this skill's call.

Sources were read on 2026-10-25 (§14).

## 0. What every situation borrows

국립국어원's plain-writing guides set one method that every situation reuses.

1. **Write for a named reader.** Know what the reader already knows and what they will do next. An expert can be spared the basics; a general reader gets them step by step. (DS, 길잡이)
2. **The point first.** The first paragraph states the conclusion or purpose, and each paragraph opens with its topic. On the web, put the most important thing at the top in screen-sized blocks. (DS, 길잡이)
3. **One piece of information per sentence.** Split a long sentence rather than pack it. Three or more items become a list with a lead-in. (DS; HW-6)
4. **Compressed forms keep their grammar.** A 개조식 line drops the ending, not the particles. Subject and predicate agree, and joined items share one structure. (DS)
5. **No translationese.** Avoid English and Japanese frames (`korean-issues.md`). (DS)
6. **Plain words.** Easy words over hard 한자어 and 한문 투, and Korean over a loanword the reader doesn't share. (DS; HW-7)
7. **Numbers as the norms write them.** `2026. 10. 25.`, `15:20` on a 24-hour clock, ranges with `~`, units after numerals, one money unit per document. (SPEC; HW-3)

## 1. The ending follows the reader

What changes most between situations is the sentence ending, and it follows the relation between writer and reader, not the document format. 국립국어원 keeps 명사형 lines in reports but rewrites the same lines into 합쇼체 when a notice addresses the public, because to the public they read as curt and authoritative. (DS, 길잡이)

| Writer → reader | Default ending | Situations |
|---|---|---|
| colleague or superior inside the organization | 명사형 bullets (~함·~음·~임); 합쇼체 or 해라체 for full sentences, one per document | report, deck |
| an institution or company → the public | 합쇼체, polite and plain; 명사형 only in labels and table cells | notice |
| a brand → its consumers | the brand's level; 해요체 is common for consumer brands | app, site, product |
| a company → a business buyer, a partner or a stranger | 합쇼체 statements, requests in -세요 or -시기 바랍니다 | site (B2B), email |
| the organization, written about in the third person for journalists | 해라체 (-다) narration; quotes keep the speaker's own level | press |
| a tool → its developers | the doc set's choice, one per document | docs |
| a team → candidates | one level for the whole post, 해요체 or 합쇼체 | hiring |

A text that changes reader changes its endings with it. A report that becomes a public notice turns its 명사형 lines into 합쇼체 sentences.

## 2. Pick the situation

| Situation | The request says | Checker |
|---|---|---|
| `app` (default) | 앱, 화면, 버튼, 토스트, 온보딩 | HW-1…14 |
| `site` | 랜딩, 홈페이지, 서비스 소개, 기능 소개 | HW-1…14 |
| `product` | 상품 상세, 상품 설명, 상품명 | HW-1…14 |
| `report` | 보고서, 기획서, 주간 보고, 회의 자료, 원페이지 | HW-R1…R5 |
| `deck` | 피치덱, IR, 발표 자료, 슬라이드, 장표 | HW-R1…R6; detected from a reveal.js, Marp or Slidev deck |
| `notice` | 공지, 안내문, 점검, 정책 변경, 장애 안내 | HW-P1…P4 |
| `email` | 메일, 이메일, 제안 메일, 사과 메일, 메시지 | HW-1…14 |
| `press` | 보도자료, 언론 배포 | HW-11 (해라체 narration) |
| `docs` | README, 가이드, API 문서, 릴리스 노트 | HW-1…14 |
| `hiring` | 채용 공고, 직무 소개 | HW-1…14 |

Give the checker the situation with `--context=<situation>` or with a pragma in a file's first 10 lines (`<!-- hangul-context: press -->`). The pragma wins, and without either a deck is detected from its format; everything else runs as `app`. Every situation also gets the document rules HW-D1…D4 on Markdown and text files: When an agent checks what it wrote, it passes `--context` and doesn't add a pragma to the file it delivers; in a JSON message file a pragma becomes a key the app loads.
- HW-D1: notes to the writer or placeholders left in the document;
- HW-D2: one list, one ending form;
- HW-D3: stock LLM formulas;
- HW-D4: frames that are normal once but not in a run.

## 3. 보고서·기획서 (`report`)

| | |
|---|---|
| 말투 | Neutral and factual; no emotion, praise or hedging. 명사형 for 개조식 lines; full sentences in 해라체 or 합쇼체, one per document; never 해요체 |
| 작성 방식 | 개조식: one fact per line, grouped by meaning, one marker hierarchy (□ → ○ → –, or 1. → 가. → 1)); each line still grammatical; every figure with its unit, its base (대비 무엇), its period and its source |
| 흐름 | The title carries the content and the direction, in one line → 개요 (why) → the most important item first → conclusion, what is asked, next steps. Incident report: 개요 → facts → explanation → brief opinion and measures |
| 어휘 | Ordinary 사무 한자어 is fine (검토, 추진, 협의); concrete over abstract; buzzword loanwords (니즈, 리텐션 극대화) replaced unless the organization defines the term |
| 표기 | `2026. 10. 25.(토)`, `14:00`, ranges with `~`; one money unit per document, declared in each table ("(단위: 억 원)"); %p for a difference between rates |

Failures to look for:
- **Chat endings.** `매출이 12% 늘었어요!` reads like a chat message pasted into a document. Checked by HW-R1.
- **Topic titles.** `3분기 실적` makes the reader open the body to find the point.
- **Noun stacks passed off as 개조식.** `고객 니즈 기반 온보딩 프로세스 고도화를 통한 리텐션 극대화 추진`: with the particles gone, nobody knows who does what.
- **Bullets that don't match.** 명사형 lines beside full sentences, or an object without its verb. Checked by HW-D2 and HW-R4.
- **Bullets written as sentences.** Every item ends in `~다` or `~습니다`, so the list reads as prose cut into lines. Checked by HW-R5.
- **English scaffolding.** Executive Summary, Key Takeaways and Action Items as section heads, where Korean reports use 개요·현황·문제점·대안·추진 계획·건의.

| Before | After |
|---|---|
| 제목: 고객 이탈 현황 분석 | 제목: 결제 오류로 유료 고객 이탈 증가, 결제 모듈 교체 승인 요청 |
| 이번 분기 신규 가입자가 크게 늘었어요! | ○ 3분기 신규 가입자 4만 2000명, 전 분기 대비 18% 증가 |
| 이번 설문 결과는 가격 정책의 재검토가 필요함을 보여 준다. | 설문 결과, 가격 정책을 다시 검토해야 함. |

*Decides:* a period after 명사형 lines is allowed either way, so keep one per document. An organization's own defined terms may stay. A report that will be published changes its endings for its new reader.

## 4. 피치덱·발표 슬라이드 (`deck`)

Two genres share this situation, and they must not be confused:
- **Investor decks** are slides, read in seconds and presented in 15–20 minutes. Their conventions come from practitioners (OP).
- **Government business-plan forms** (예비창업패키지 and the like) are fixed documents. Their form must not be changed, and PPT files are not accepted.

| | |
|---|---|
| 말투 | **On the slide:** the headline states the takeaway as a 명사형 line or a 해라체 sentence; the body is keywords, noun phrases and figures, not sentences addressed to anyone. **Spoken:** 하십시오체, plain and confident. No 해요체 statements on slides |
| 작성 방식 | One message per slide: the headline, the figure and what the presenter says point to the same conclusion. A problem and its solution go on separate slides, and extra evidence goes to the appendix. A technical term comes only after a plain sentence of who has what problem |
| 흐름 | One-sentence company definition → problem → solution → market (TAM → SAM → SOM, time on SOM) → business model → traction → go-to-market → competition → team → financials and the ask → milestones. Draft it top-down, one sentence per section first. End on the ask, the use of funds and the next milestone, not on 감사합니다 |
| 어휘 | Investor terms (TAM, ARR, CAC, LTV, MoM) are shared and fine; gloss them once for a general audience. Decorative loanwords (시너지, 퀀텀 점프, 게임 체인저) say nothing |
| 표기 | One money unit per deck, declared; growth with its base and period; market sizes with their source |

Failures to look for:
- **Topic headlines.** `시장 분석` gives the investor nothing to take away.
- **Paragraphs on slides.** Speaker notes written onto the slide.
- **One slide, two ending forms.** Two 명사형 lines and one 합쇼체 sentence. Checked by HW-D2.
- **Sentences as bullets.** `1인분 장보기는 식재료가 남아 버려지기 쉽다` on a slide whose next slide has 명사형 lines. The body is keywords and figures (`남는 식재료`, `배달비 부담`). Checked by HW-R5.
- **The same figure on three slides,** which blurs what each slide is for. Checked by HW-R6 in Markdown decks.
- **Translated deck scaffolding.** `Why Now? → 왜 지금인가?`, `문제점: … / 해결책: …`, rhetorical questions.
- **Notes to the writer left on a slide.** `※ 출처 확인 후 추가하세요`. Checked by HW-D1.

| Before | After |
|---|---|
| (headline) 시장 분석 | 수도권 B2B 당일 배송, 3년 안에 연 420억 원을 노릴 수 있는 시장 |
| 저희 서비스는 다양한 불편함을 혁신적인 AI 기술을 통해 해결합니다. | · 예약 전화 평균 3.2회 → 앱에서 1회<br>· 예약 확정까지 11분 → 40초 |
| - 월 구독자 8,200명 / - 재구독률 72%로 검증된 반복 구매 모델 / - 시리즈 A로 전국 확장을 시작합니다 | the last line becomes `- 시리즈 A로 전국 확장 시작` |

*Decides:* 명사형 and 해라체 headlines are both accepted; the deck's house style picks one. Investors get their own terms, while a public evaluator gets Korean terms or a first-use gloss.

## 5. 웹사이트·랜딩 (`site`)

| | |
|---|---|
| 말투 | The brand's level. Where it's silent: a headline as a noun phrase or a 해라체 slogan (which sidesteps the level); body in 해요체 for consumer products, 합쇼체 for B2B, finance and institutions; CTAs as the -기 button form or -세요, which sit with either. Confident, never urgent |
| 작성 방식 | One key message per hero. The sub copy says what it is and what the reader gets, in one sentence. A feature block is a short title plus one or two sentences of fact. A number carries its basis (who counted, when) |
| 흐름 | What it is and for whom → what the reader gets → how it works → proof (numbers, named customers, attributed quotes) → price and conditions beside the offer → the action |
| 어휘 | The reader's words, one term per concept; no in-group slang or buzzwords; loanwords spelled to 외래어 표기법 |
| 표기 | `누적 3,000만 명`; `5,000개 이상` rather than a trailing `+`; no period on headlines and buttons, one at the end of sentence-style copy |

Failures to look for:
- **Calqued English hero templates:** `~의 미래를 경험해 보세요`, `~를 위한 올인원 플랫폼`, `당신의 비즈니스를 한 단계 업그레이드하세요`.
- **당신 by default.** Korean addresses with nothing, a name or 님 (HW-8).
- **Adjective stacks with no fact:** `혁신적이고 직관적인 차세대 AI 솔루션` (HW-12 for unsupported claims).
- **Two levels in one block:** `~을 제공합니다. 지금 바로 시작해요!` (HW-11).
- **One concept, two names:** `할 일` in the hero and `액션 아이템` in a feature block.
- **Benefits in perfect threes:** `더 빠르게, 더 쉽게, 더 안전하게`.
- **Proof without a basis:** `업계 1위`, `고객 만족도 99%` (HW-12).

| Before | After |
|---|---|
| 당신의 팀을 위한 올인원 협업 플랫폼 | 회의록 정리부터 할 일 배정까지, 회의 하나로 끝나요 |
| 혁신적인 AI로 업무 효율을 극대화하세요! | 회의가 끝나면 요약과 할 일이 바로 정리돼요 |

*Decides:* DESIGN.md first, then the register of the product the page sells, then the reader. B2B buyers and institutions get 합쇼체; consumers usually get 해요체.

## 6. 상품 상세 (`product`)

| | |
|---|---|
| 말투 | The brand's level, usually 해요체 for consumers; confident, never urgent |
| 작성 방식 | **Name:** brand + the product's name + key attributes (capacity, count, colour); promotion and delivery words go in their own fields, not the name. **Detail:** checkable facts as text (materials with percentages, measurements, origin), not only inside images |
| 흐름 | One-line value → key facts → how to use and care for it → cautions → the transaction terms (delivery, returns, A/S) |
| 어휘 | Concrete, checkable words; no unsupported superlatives (최고급, 역대급, 국내 최초); technical terms glossed (TPU 범퍼 → 충격을 흡수하는 TPU 범퍼) |
| 표기 | `29,000원`; `500mL`, `2.5kg`; `겉감 면 100%`; a sale with its end date and time |

Failures to look for:
- **Keyword-stuffed names:** `★특가★[무료배송] 남자 여자 커플 후드티…`.
- **Translated listing templates:** `최고의 편안함을 경험하세요`.
- **Pressure copy:** `오늘만 이 가격!`, `품절 임박`, `놓치면 후회해요` (HW-12).
- **Honorifics on the product:** `세탁기 사용이 가능하세요`, `사이즈가 크게 나오셨어요` (HW-10).
- **Registers drifting between blocks:** a 해라체 tagline, a 해요체 story, 합쇼체 care notes.

## 7. 앱 화면 (`app`)

The baseline: HW-1…HW-14 and SKILL.md §4b. Other situations borrow its user's side, its plain words and its no-pressure rules. Reports, decks and press releases invert its 해요체 default.

## 8. 공지·안내문 (`notice`)

| | |
|---|---|
| 말투 | 합쇼체, polite and plain, even from a 해요체 brand when the notice is about policy, legal terms or an incident. No command or blame to the reader: `~할 것`, `~바람` and `책임은 ~에게 있음` become `~해 주시기 바랍니다`, `~해야 합니다` and `~할 수 있습니다`. An apology is direct and comes first |
| 작성 방식 | A title that says what it is about. The change, its date and who is affected come in the first lines. Then labelled blocks (일시, 대상, 내용, 이용 제한, 방법, 문의) as items, in time or procedure order. Notes take ※, and a policy change gets a before/after table |
| 흐름 | (greeting) → what changes or happens, when, to whom → what the reader must do, or that nothing is needed → details → how to opt out (철회, 탈퇴, 환불) → contact. Incident: apology → what happened (window, scope) → cause → fix → compensation → prevention → contact |
| 어휘 | Plain words for 한문 투 (금번 → 이번, 익일 → 다음 날); vague words replaced by what they mean (일부 서비스 → 로그인·결제) |
| 표기 | `2026년 11월 5일(목) 02:00~06:00`: with the weekday, on one clock, with `~`; the total duration when it helps |

Failures to look for:
- **Translated openers and closers** around a vague body: `~에 대해 알려 드리고자 합니다`, `보다 나은 서비스를 제공하기 위해 최선을 다하겠습니다`.
- **The key facts loose:** no weekday, 12- and 24-hour forms mixed, `일부 서비스` without naming which.
- **Command and blame endings:** `기한 내 제출할 것` (HW-P1…P4).
- **Conditional or passive apologies:** `불편을 느끼셨다면 사과드립니다`, `장애가 발생되어 불편이 초래되었습니다`.
- **Honorifics on things:** `점검이 진행되실 예정입니다` (HW-10).

| Before | After |
|---|---|
| 금번 시스템 정기 점검 관련하여 아래와 같이 안내드립니다. | 11월 5일(목) 02:00~06:00에 정기 점검을 합니다. 점검하는 동안 로그인과 결제를 쓸 수 없습니다. |
| 미제출 시 불이익은 신청인에게 있음. | 기한까지 내지 않으면 지원 대상에서 빠질 수 있습니다. |

*Decides:* the notice type. Policy, legal and incident notices take 합쇼체. Product news takes the brand's level.

## 9. 이메일·메시지 (`email`)

| | |
|---|---|
| 말투 | 하십시오체 (합쇼체) in formal situations and with anyone you are not close to, whatever their rank; 해요체 by closeness; never 해라체; one style throughout. Humble forms where the action is done for the reader (`말씀드리다`, `안내드리다`, `보내 드리다`, `여쭙다`, `뵙다`), not on every verb, and never an archaic stand-in (`청하다`, `사료되다`). A request to someone outside reads `~해 주시면 감사하겠습니다`, `~해 주실 수 있을까요?` or, for the ask itself, `~을 요청드립니다`. `~해 주십시오` reads as an order, `~하시기 바랍니다` as a public notice, and a bare `요청합니다` as blunt on first contact. `저희 회사` for your own side |
| 작성 방식 | A letter's shape: salutation → greeting → body → closing → your name. Salutation `○○○ 님` (spaced) or a title (`○○○ 팀장님`). Sign-off `○○○ 드림` or `○○○ 올림`, with your title **before** the name (`마케팅팀 과장 ○○○ 드림`); after the name it honors yourself. If you weren't given the sender's name, keep `○○○` in the sign-off and say so; a mail signed by a company alone reads unfinished |
| 흐름 | Salutation → greeting → on first contact, one sentence on who you are (team, title, name) → the ask or the news → details (dates, attachments) → what you need, by when → closing → name. The ask comes early, but after the introduction: a stranger reads who is asking first. One ask per mail |
| 어휘 | No `○○로부터` in a sign-off; no stacked honorifics (`○○○ 님 귀하`); in writing, `감사합니다` rather than `수고하세요` to a senior |
| 표기 | A proposed time with its weekday (`10월 28일(화) 14:00~14:30`); slots as `아래 세 일정` or `세 시간대`, never `세 시간`, which reads as three hours; a deadline as a date, not `빠른 시일 내` |

Failures to look for:
- **Translated openers and closers:** `이 메일이 잘 도착했기를 바랍니다`, `궁금한 점이 있으시면 주저하지 말고 연락 주세요`.
- **A title after your own name:** `박지영 과장 드림` (HW-10).
- **당신 or 귀하 in the body** (HW-8).
- **`-드리다` on verb after verb:** `공유드리고 … 요청드리며 … 전달드리겠습니다`. Keep it once where the action is for the reader (HW-D4 at three). The opposite overcorrection, `화상 미팅을 청합니다`, reads archaic: write `요청합니다` or `부탁드립니다`.
- **The same thank-you formula on every request,** or none at all (`가능한 시간대를 알려 주십시오`).
- **Thanking before the reader has done anything:** `읽어 주셔서 감사합니다` as the opening line, `시간 내 주셔서 감사합니다` before they have agreed.
- **The ask buried or several:** three paragraphs of context, then four questions with no deadline.

| Before | After |
|---|---|
| 박지영 과장 드림 | 마케팅팀 과장 박지영 드림 |
| 바쁘신 중에 시간 내 주셔서 감사합니다. 회신 기다리겠습니다. 감사합니다. | 바쁘신 중에 읽어 주셔서 감사합니다. 회신 기다리겠습니다. |

## 10. 보도자료 (`press`)

| | |
|---|---|
| 말투 | 해라체: narration ends in -다 (`출시했다`, `밝혔다`). Not 명사형, which reads authoritative, and not -습니다, except in a release that states a position. Quotes keep the speaker's own words and level |
| 작성 방식 | An information block (보도 일시 or 배포 즉시, 담당 부서, 담당자, 연락처). The 표제 is concise, as a sentence or a noun phrase. The 부제 is a noun phrase in one or two lines. The lead is the first sentence: who, when, what, with the announcement date (`~한다고 2일 밝혔다`) |
| 흐름 | 표제 → 부제 → lead → details (figures, schedule, background) → quote → next steps → `한편` background → `(끝)` → 붙임 and contacts. `###` is the English convention |
| 어휘 | Plain words for 관청용어 (`제고` → `높이기`, `일환으로` → `하나로`, `금년` → `올해`); `~에 위치한` → `~에 있는`; `회의를 갖는다` → `연다`; a needed foreign term in Hangul with the original in parentheses |
| 표기 | Days in the current month as the day (`22일`, `오는 27일`); approximate numbers with one marker (`30여 명` or `약 30명`, not `약 30여 명`); the first quote names the speaker as name, company, title (`○○○ 바른걸음 대표는`). Without the name, keep `○○○` there and say so; `바른걸음 대표는` alone drops the convention |

Failures to look for:
- **합쇼체 or 해요체 narration:** `○○를 출시했습니다` (HW-11 under `press`).
- **English release formulas:** `~를 발표하게 되어 기쁘게 생각합니다`, `###`.
- **Background before the lead:** a first paragraph about the AI era.
- **Judgements in the narration:** `업계에 큰 반향을 일으킬 것으로 기대된다`. Attribute them to a quote or cut them.
- **Stock flourishes:** `~시대를 연다`, `지속적으로 확장해 나갈 계획이다`.

*Decides:* quote punctuation. 국립국어원 writes `“…다.”라고`, and companies often write `“…다”고`. Pick one per release.

## 11. 기술 문서 (`docs`)

| | |
|---|---|
| 말투 | Neutral and exact, no marketing; one level per doc set: `-세요` instructions with `합니다` statements (Microsoft), 해요체, or 평어체 `-다`. 십시오 belongs to EULA and legal text |
| 작성 방식 | The developer is the actor, not the tool (`이 명령어를 실행하면 …`); active voice; one idea per sentence; verbs instead of 수행·진행·처리 (`설치합니다`, not `설치를 진행합니다`); procedures as numbered steps with runnable code; an error as the message, then the action, then the code |
| 흐름 | By document type: a tutorial never breaks, a how-to does one task, a reference lists. A heading carries the searchable keyword; same-level headings share one form |
| 어휘 | One term per concept (not 업로드·첨부·추가 in turn); official names as their owners write them; an abbreviation spelled out once; identifiers, commands and flags in English, the particle following how the word is read (`API를`, `Git으로`) |
| 표기 | Headings short, without `!` or `?`; release notes that name the change, not `버그 수정 및 성능 개선` (HW-D3) |

Failures to look for:
- **당신 and translated imperatives:** `당신은 먼저 API 키를 발급받아야 합니다` (HW-8).
- **Light-verb padding:** `설치를 진행합니다`, `삭제 작업을 수행합니다` (HW-8).
- **The tool as the subject:** `이 라이브러리는 인증 처리를 가능하게 합니다`.
- **Hedges instead of conditions:** `일부 환경에서 문제가 발생할 수 있습니다`.
- **Meta openers:** `이제 ~에 대해 알아보겠습니다` (HW-D3).
- **Notes to the maintainer left in the page:** `> 작성 시 확인 필요` (HW-D1).

*Decides:* loanword spelling. 외래어 표기법 gives 프런트엔드, while some doc sets follow the spelling search data shows. The doc set's glossary decides, and public pages follow the norm.

## 12. 채용 공고 (`hiring`)

| | |
|---|---|
| 말투 | One level for the whole post, chosen first: 해요체 (friendly) or 합쇼체 (formal). Invitational, never authoritative |
| 작성 방식 | Qualifications as `~(한) 분` lines or as noun phrases, one form per list (HW-D2); experience tied to a domain (`e-커머스 UX 경력 3년 이상`); 우대 사항 kept to the three or four that matter |
| 흐름 | 팀·회사 소개 → 하는 일 → 자격 요건 → 우대 사항 → 근무 조건 → 복리후생 → 전형 절차 → 참고 |
| 어휘 | Concrete tasks and tools; no personality boilerplate (`열정 넘치는 인재`, `탁월한 커뮤니케이션 능력`, `가족 같은 분위기`); internal team words (사일로, 챕터) explained |
| 표기 | `모집 기간 2026. 10. 8.~10. 27. 18:00`; pay as a range in 만 units if disclosed (`6,000만~8,000만 원`), never an adjective in its place (`업계 최고 수준 대우`) |

A post doesn't state a sex, an age, looks or marital status the job doesn't need. That is law as well as style, and old templates still carry such lines.

Failures to look for:
- **A translated English job-description skeleton:** `책임 사항`, `있으면 좋은 것`.
- **당신 + -게 됩니다:** `당신은 결제 시스템 개발을 담당하게 됩니다`.
- **Mixed endings in one list:** `3년 이상 경력자 / Kotlin 능숙 / 원활한 소통이 가능하신 분`.
- **Template instructions left in:** `(근무지 주소를 입력해 주세요)` (HW-D1).

## 13. Domain tone

A domain changes the situation it appears in. A clinic's notice is a §8 notice made calmer and more exact. A fintech landing page is a §5 page with finance's care about conditions.

| Domain | 말투 | 작성 방식 · 흐름 | 어휘 | Typical AI failure |
|---|---|---|---|---|
| 의료 | calmer than the brand's default; no exclamation, emoji or cheer about procedures | explain before inviting; the course, risks and cost beside the benefit at the same size | a medical term with a plain gloss; no promises, rankings or speed words | cosmetic-marketing templates on a clinic page (`단 한 번에`, `부작용 걱정 없는`) |
| 금융 | calm and exact; legal and disclosure text in 합쇼체 even inside a 해요체 app; never casual about loss or debt | the condition beside the benefit, the risk beside the return, every rate with its range, basis and date | plain words for jargon (HW-7), required terms kept with a gloss | `누구나 연 10%!`, a rate with no date |
| 공공 | 합쇼체 or the institution's 해요체; never a command or blame | everything the reader needs, in time or procedure order, with the contact | 다듬은 말 and Hangul first | policy jargon (로드맵, 거버넌스, 원스톱), noun-stacked 공고 lines |
| B2B | 합쇼체 statements on the site, questions in 해요체 | claims a buyer can verify (security, uptime, integrations, counts with a date) | product names in English with particles as read; one term per concept | `엔터프라이즈급 올인원 AI 솔루션`, statements alternating 합쇼체 and 해요체 |
| 커머스 | the brand's level, warm and confident, never urgent | the total price where a price first appears; conditions beside the offer | concrete materials and measurements; no unsupported superlatives | countdowns and `품절 임박` |

| Domain | Before | After |
|---|---|---|
| 의료 | 단 한 번의 시술로 10년 젊어지는 놀라운 변화! | 주름 개선 시술은 보통 2~3회 받습니다. 시술 뒤 부기와 멍이 1~2주 갈 수 있습니다. |
| 금융 | 연 최대 5% 이자 받으세요! | 연 2.0~5.0%(기본 2.0% + 우대 최대 3.0%p). 우대금리는 급여 이체 등 조건을 채우면 붙어요. |
| 공공 | 본 사업은 지역 거버넌스 구축을 통한 원스톱 서비스 제공을 목표로 함. | 이 사업은 주민과 구청이 함께 정하는 협의 기구를 만들고, 신청을 한곳에서 받는 것을 목표로 합니다. |
| B2B | 엔터프라이즈급 보안으로 귀사의 데이터를 완벽하게 보호합니다. | 고객 데이터는 암호화해 국내 데이터센터에 저장하고, 접근 기록을 1년 동안 남깁니다. |

## 14. Sources

Read on 2026-10-25. The research notes behind this file, with page references and the samples, are kept outside the published skill.

| Source | Publisher | Version | URL |
|---|---|---|---|
| 「쉬운 공문서 쓰기 길잡이」 | 국립국어원 (공공누리 제3유형) | 2022 | https://www.korean.go.kr/front/etcData/etcDataView.do?mn_id=&etc_seq=700&pageIndex=1 |
| 「한눈에 알아보는 공공언어 바로 쓰기(개정판)」 | 국립국어원 (공공누리 제4유형) | 2022 | https://www.korean.go.kr/front/etcData/etcDataView.do?mn_id=&etc_seq=699&pageIndex=1 |
| 「유형별로 알아보는 보도자료 작성 길잡이」(재판) | 국립국어원 | 2021 | https://www.korean.go.kr/front/etcData/etcDataList.do?mn_id=46 |
| 「표준 언어 예절」 | 국립국어원 (공공누리 제4유형) | 2011 | https://www.korean.go.kr/front/reportData/reportDataView.do?mn_id=207&report_seq=767 |
| 온라인가나다 answers on 님, 드림·올림, 수고하세요 | 국립국어원 | 2024-11 … 2026-10 | https://www.korean.go.kr/front/onlineQna/onlineQnaList.do?mn_id=216 |
| 테크니컬 라이팅 가이드 | Viva Republica (CC BY-NC-SA 4.0; cited, not adapted) | 2025–2026 | https://technical-writing.dev |
| Korean Localization Style Guide | Microsoft | 2024-09-05 | https://aka.ms/korean-styleguide |
| 「토스의 8가지 라이팅 원칙들」, 「마케팅 문구 클릭률을 올리는 6가지 원칙」 | toss.tech | 2022-11-15, 2026-01-30 | https://toss.tech/article/8-writing-principles-of-toss · https://toss.tech/article/Marketing_Writing |
| 2026 예비창업패키지 사업계획서 양식과 주요 질의응답 | 중소벤처기업부 · 창업진흥원 | 2026-03-24 | https://www.k-startup.go.kr/web/contents/bizpbanc-deadline.do?schM=view&pbancSn=176458 |
| IR deck practitioner posts | 넥스트유니콘; 에이바이플러스 (brunch) | 2022–2026 | https://www.nextunicorn.kr/insight/9dd0ba4b6b8f1014 · https://brunch.co.kr/@venture-digest/95 |
| 채용 공고 작성 가이드 | 그리팅 | 2023–2026 | https://blog.greetinghr.com/job-openings/ |
| 전자상거래 상품 정보 제공 고시; 네이버 쇼핑 상품명 가이드 | 공정거래위원회; NAVER | 2023; 2024 | https://www.law.go.kr/행정규칙/전자상거래등에서의상품등의정보제공에관한고시 · https://join.shopping.naver.com/faq/list.nhn?catgCd=H00015&dtlCatgCd=H00051 |
| Samples: notices (Kakao, Toss, LG U+), press releases (NAVER, Kakao, Toss, Microsoft Korea), job posts (Toss, 당근, Kakao, 우아한형제들, NAVER), product pages (컬리, 29CM), home pages of 67 Korean services | the companies | live 2026-10-25 | (in the research notes) |
| AI 한글 티 분류 체계 | im-not-ai (MIT; IDs cited, no text adapted) | commit `b37e020` | https://github.com/epoko77-ai/im-not-ai |

## Unverified (not used as conventions)

- A public Korean standard for the one-page report (원페이지 보고서): none found.
- A first-party Korean VC or accelerator guide to deck writing: none reachable. The deck conventions here are practitioner sources (OP).
- Whether 국립국어원 still calls `수고하세요` to a senior undesirable: the 2011 book says so, and a 2025 answer says perceptions are changing. This file avoids the question by recommending `감사합니다`.
