# /hangul — writing by surface genre

HW-1 … HW-14 (`ux-writing.md`) describe app and service UI: 해요체 unless the brand says otherwise, the user's side, plain words, no pressure. That is the **default profile, `app`**. Other surfaces need other copy: a slide deck ends its bullets in 명사형, a hospital page is legally an advertisement, a government page is a 공문서, an ad text must open with "(광고)". This file is the diff from the default for seven genres, with each genre rule's evidence and tier. DESIGN.md's voice, speech level and house spelling still win over every profile.

Tiers as in `ux-writing.md`: **SPEC** = statute, 고시, orthography (verified in place on law.go.kr, versions below); **DS** = official guidance (a regulator, a statutory review body, 국립국어원, a platform policy, a published style guide); **DATA** = a measured result with a stated sample; **OP** = company blog, practitioner, or this skill's call. Rule IDs: HW-R* report, HW-M* medical, HW-P* public, HW-C* commerce, HW-D* developer, HW-F* finance, HW-N* notification. "Checked" means `copy-check.mjs --context=<genre>` reports it. Checked 2026-10-24.

## 1. Pick the profile first

| Profile | The request says | The repo shows | Checker |
|---|---|---|---|
| `app` (default) | 앱, 화면, 버튼, 토스트, 온보딩 | app routes, components, i18n message files | HW-1…14 |
| `report` | 보고서, PPT, 슬라이드, 장표, 회의 자료, 사내 문서 | `slides/`, `deck/`, `slide-*.html`, Marp/Reveal decks, `/report` | HW-R1…R4 |
| `medical` | 병원, 의원, 치과, 한의원, 클리닉, 진료, 시술 | 진료과목, 의료진, 진료시간, 비급여, `/clinic`, `/doctors`, `/treatment` | HW-M1…M9 |
| `public` | 정부, 지자체, 공공기관, 민원, 공고, 공문 | a `.go.kr` site, KRDS components, 민원 forms | HW-P1…P5 |
| `commerce` | 랜딩, 상품 상세, 프로모션, 할인, 이벤트 | price, cart, checkout, `/event`, `/product` | defaults (C rules proposed) |
| `dev` | 개발자 도구, B2B 대시보드, CLI, API 문서 | `cli/`, `docs/`, error codes, SDKs | defaults |
| `finance` | 대출, 보험, 투자, 예금, 약관, 설명서 | rates, premiums, `/loan`, `/insurance` | defaults |
| `notify` | 알림톡, 문자, 푸시, 이메일, 광고 수신 동의 | message templates, push payloads, marketing-consent toggles | defaults |

Two can apply at once: a 국립대병원 site is `medical` + `public`, a fintech landing is `commerce` + `finance`. Apply both rule sets; the checker takes one genre per file, so run it once per genre. Run the checker with `--context=<genre>`, or put a pragma in a file's first 10 lines (`<!-- hangul-context: medical -->`, `// hangul-context: report`, or a JSON key `"hangul-context": "public"`); the pragma wins.

Without either, the checker detects three genres on strong evidence, one file at a time, and names each file it placed with the signals that decided it:

- `medical`: two distinct clinic signals among the file's Korean strings (진료시간, 진료과목, 의료진, 휴진, 내원, 진료 예약, 원장 인사·소개, 야간 진료, 진료 안내, 접수 마감). A pet app's "동물병원 진료 예약" is one signal and stays `app`.
- `public`: two distinct public-sector signals (누리집, 민원, 정부24, 주민센터·행정복지센터, 정보공개, 공공데이터, 전자정부 in the text; a `.go.kr` or `gov.kr` link, KRDS `krds-` classes in the markup). One government link stays `app`.
- `report`: a slide-deck format marker only (reveal.js, Marp, Slidev). `report` switches HW-8 and HW-11 off, so a wrong guess would hide defects; a `reports/` or `slides/` folder (a dashboard, a carousel) and report-like wording never decide it.

Precedence: pragma, then `--context`, then detection, then `app`. `--context=app` turns detection off. A file detection doesn't place gets exactly the output it got before genres existed. When a page shows both clinic and public-sector signals, the stronger side wins (medical on a tie); run again with `--context` for the other.

## 2. Report, PPT, internal documents (`report`)

Changes from the default: bullets end in 명사형 (~함·~음·~임) and sentences in 합쇼체 or 해라체, **not 해요체** (this inverts the `app` profile's Toss-style 해요체 default; HW-11's one-level rule still holds, with the level set by the genre); HW-8's "say what the user did" doesn't apply, since a report states what was done; dates `2026. 10. 24.` and 24-hour times `14:00`; one piece of information per line. Short strings only: long narrative goes to omd-kr-writer (`biz-formal-report`), post-editing to omd-humanize.

| ID | Rule | Tier · checked | Source |
|---|---|---|---|
| HW-R1 | No 해요체 statement in report or slide copy (WARN) | DS (derived: every report example in the 길잡이 is 명사형, 해라체 or 합쇼체) + OP · ✓ | 국립국어원 「쉬운 공문서 쓰기 길잡이」 pp. 79–94 |
| HW-R2 | Don't mix 합쇼체 and 해라체 sentences in one document; 명사형 bullets sit with either (FYI) | OP · ✓ | im-not-ai E-7; omd-humanize KO playbook |
| HW-R3 | 24-hour times: `오후 2시` → `14:00` (FYI) | SPEC for 공문서, convention elsewhere · ✓ | 행정업무규정 제7조⑤ |
| HW-R4 | 명사형 lines all with or all without a final period (FYI) | SPEC allows both; consistency OP · ✓ | 「한글 맞춤법」 문장 부호 1. 마침표 (1) [붙임 2] |
| HW-R5 | One piece of information per sentence or bullet; a 개조식 line still agrees: `수준을 유지 중임` → `수준을 유지하고 있음` | DS · — | 길잡이 pp. 90, 92 |
| HW-R6 | A slide title states the conclusion (`3분기 매출, 목표보다 8% 높음`), not the topic (`3분기 실적`) | DS (core message first, p. 79) + OP (title form) · — | 길잡이 p. 79 |
| HW-R7 | Item hierarchy 1. → 가. → 1) → 가) → (1) → (가) → ① → ㉮, or □ ○ – | SPEC for 공문서 · — | 행정업무규정 시행규칙 제2조① |

| Before | After | Why |
|---|---|---|
| 매출이 전년 대비 12% 늘었어요 | 매출이 전년 대비 12% 늘었음. | HW-R1 |
| 3분기 실적 | 3분기 매출, 목표보다 8% 높음 | HW-R6 |
| 다음 회의: 11월 3일 오후 2시 | 다음 회의: 11. 3. 14:00 | HW-R3, HW-3 |
| 고객 니즈 지속 반영 | 고객의 요구를 계속 반영함 | 길잡이 p. 91 (다듬은 말) |

Hand-off: narrative paragraphs → omd-humanize with im-not-ai families A (번역투), F (과도한 수식), I (형식명사; I-4 is move-only and keeps the obligation), E-7. Don't apply C-1, C-2, C-3, C-9 or C-10 to 개조식 sections or real section titles; im-not-ai's own exceptions keep 학술·보고서 structure.

## 3. Hospital and clinic sites (`medical`)

의료법 제56조① defines 의료광고 to include what 의료인등 show on the internet, so a clinic's own homepage is inside 제56조②'s prohibitions even though it is outside prior review (시행령 제24조; the KMA review board's FAQ says the same). Changes from the default: HW-12 (no pressure) becomes statute; side effects are named and never set small (so HG-3's 13px "skippable" tier never applies to 부작용, 주의사항 or prices); the facts 제57조③ lists are said plainly. The register is the brand's (no source prescribes one). A pattern can't tell an ad from patient education, so every medical finding is at most WARN.

| ID | Rule | Tier · checked | Source |
|---|---|---|---|
| HW-M1 | No guaranteed result or cure: 완치, 100% 효과·보장, 효과가 확실, 반드시 낫, 책임집니다 (WARN) | SPEC + DS · ✓ | 제56조②2호; 시행령 제23조①2호; KMA board list |
| HW-M2 | No absolute about harm: 부작용·통증·흉터 없는, 걱정 없는, 거의 없어요 (WARN) | SPEC + DS · ✓ | 제56조②7호·8호; KMA FAQ ("부작용이 없고") |
| HW-M3 | No superlative or exclusive claim: 최고, 최초, 유일, 최상, 최첨단, 획기적, No.1, 1위, 최신 장비 (WARN) | SPEC + DS · ✓ | 제56조②4호·8호; KMA FAQ |
| HW-M4 | No patient testimonial or before/after: 치료 후기, 체험기, 경험담, 치료 사례, 전후 사진 (WARN) | SPEC + DATA · ✓ | 제56조②2호; 시행령 제23조①2호; MOHW 2024 (183 of 506 problem items) |
| HW-M5 | No patient inducement: rewards for reviews, 본인부담금 면제·할인, 무료 시술·검사, 선착순, 소개 혜택 (WARN) | SPEC + DS · ✓ | 제27조③; MOHW 2024, 2017 |
| HW-M6 | A 비급여 discount states amount, who, period and the pre-discount price; 50%+ was treated as excessive inducement (FYI; WARN at 50%+) | SPEC + DS · ✓ | 제56조②13호; 시행령 제23조①13호; MOHW 2017 |
| HW-M7 | 전문병원 only for a hospital 보건복지부 designated, written `보건복지부 지정 ○○전문병원 (지정기간: …)`; for focus areas `중점진료`, `집중진료`, not 전문·특화·노하우 (FYI) | SPEC + DS · ✓ | 제42조①2호; 제56조②9호; KMA board list |
| HW-M8 | No endorsement, award or third-party certification except 의료기관 인증 and public or statutory ones (`보건복지부 인증 의료기관 (유효기간: …)`) (FYI) | SPEC + DS · ✓ | 제56조②14호; KMA board list |
| HW-M9 | Wording the KMA board often rejects: 당일 시술, 빠른 회복 (→ "…지향"), 한번에 해결 (→ 동시에), 1:1 맞춤 (→ 맞춤), 해결·솔루션·비결·근본, the CTA 알아보기 (→ 문의하기) (FYI) | DS · ✓ | KMA board list, 2025-09-18 |
| HW-M10 | 부작용, 주의사항 and 비급여 prices are never in small type | SPEC (derived) · — | 시행령 제23조①7호 |
| HW-M11 | Say the basic facts plainly: name, address, phone, 진료과목, doctors' names and licenses, 진료일·진료시간, 전문병원 designation, 인증, 전문의 and 전문과목; post 비급여 prices so patients can find them | SPEC · — | 제57조③; 시행령 제24조⑦; 제45조① |
| HW-M12 | Career lines only for 6 months or longer, written as 졸업/수료 (not 출신); 전문의 only in a legal 전문과목 (`내과 전문의`, not `내시경 전문의`) | SPEC + DS · — | 시행령 제23조①2호; KMA board list and FAQ |

| Before | After | Why |
|---|---|---|
| 허리 디스크, 비수술로 완치해 드려요 | 허리 디스크 비수술 치료, 통증 개선을 목표로 해요 | HW-M1 |
| 부작용 없는 시술 | 시술 후 통증, 붓기, 감염 같은 부작용이 생길 수 있어요 | HW-M2, HW-M10 |
| 지역 최고의 의료진 | 정형외과 전문의 3명이 진료해요 | HW-M3, HW-M11 |
| 생생한 치료 후기 / 후기 쓰면 커피 쿠폰 | (remove) | HW-M4, HW-M5 |
| 도수치료 70% 할인 이벤트 | 도수치료 1회 ○○원 (비급여 진료비용 안내) | HW-M6, HW-M11 |
| 척추 전문병원 | 척추 중점진료 | HW-M7 |
| 더 알아보기 | 진료 예약 문의하기 | HW-M9, HW-5 |

Known false positives (read in context): a goal ("통증 없이 걸을 수 있도록 치료 목표를 세워요"), health advice ("유일한 예방법은 금연이에요"), limited vaccine stock ("백신은 선착순으로 접종해요"), a request not to post reviews. Hand-off: 진료 소개, 원장 인사말 and disease explanations → omd-humanize (im-not-ai A, F, D-2, I), with the rule that a rewrite never adds a superlative, a guarantee, a testimonial or a recovery time.

## 4. Public sector (`public`)

국어기본법 제3조 5호 counts a public institution's 누리집 posts, 현수막 and 안내판 as 공문서등, and 제14조① requires them in "알기 쉬운 용어와 문장", to the orthography, in Hangul, with foreign script only in parentheses where needed. Changes from the default: 합쇼체 is fine (국립국어원 itself recommends `~하기 바랍니다`, `~하십시오` and `~하세요` in 공문서; HW-11 consistency still applies); no 고압적 or 차별적 표현; dates and times per 행정업무규정 제7조 (HW-3 already matches).

| ID | Rule | Tier · checked | Source |
|---|---|---|---|
| HW-P1 | `~할 것` as an order → `~하세요`, `~해야 합니다` (FYI) | DS · ✓ | 길잡이 p. 21 |
| HW-P2 | `~ 바람` → `~하기 바랍니다`, `~해 주시기 바랍니다` (FYI) | DS · ✓ | 길잡이 p. 22 |
| HW-P3 | `~하라` → `~하십시오`, `~하세요` (FYI) | DS · ✓ | 길잡이 p. 23 |
| HW-P4 | `~다 할 것이다` → `~다` (FYI) | DS · ✓ | 길잡이 p. 23 |
| HW-P5 | `장애자`, `장애우` → `장애인` (WARN) | DS · ✓ | 길잡이 p. 24 (차별적 표현) |
| HW-P6 | No English-only labels on a public site: `FAQ` → `자주 묻는 질문(FAQ)`, `Contact` → `문의` | SPEC · — | 국어기본법 제3조 5호, 제14조①; 시행령 제11조 |
| HW-P7 | 일반화되지 않은 약어·전문용어 avoided; HW-7's pairs apply | SPEC · (HW-7) | 행정업무규정 제7조② |

| Before | After |
|---|---|
| 신청서는 방문 전에 미리 작성할 것. | 신청서는 방문 전에 미리 작성해 주세요. |
| 자세한 사항은 전화로 문의 바람. | 자세한 사항은 전화로 문의하기 바랍니다. |
| 신분증을 반드시 지참하라. | 신분증을 꼭 지참하십시오. |
| 장애우 전용 창구 | 장애인 전용 창구 |

## 5. Commerce and marketing landing (`commerce`, proposed)

| ID | Rule | Tier | Source |
|---|---|---|---|
| HW-C1 | "업계 최초·유일·1위·최대" only with proof and a source line beside it (조사 기관, 기간, 기준). Subjective puffery ("최고의 맛") is not misleading | SPEC | 표시광고법 제3조, 시행령 제3조; 공정위 고시 제2019-11호 Ⅲ.14.나, Ⅱ.2.나.(5) |
| HW-C2 | A discount rate is computed from the real 종전거래가격 (about the last 20 days; the lowest if it changed) | SPEC | 공정위 고시 제2019-11호 (가격) |
| HW-C3 | The first screen that shows a price shows the total the buyer must pay, not part of it | SPEC | 전자상거래법 제21조의2①1호 |
| HW-C4 | Decline, cancel and 해지 options are as plain and visible as accept; no pre-checked add-on; one "정말 해지할까요?", not a loop | SPEC | 전자상거래법 제21조의2①2–5호; HW-12 |
| HW-C5 | "타사 대비" comparisons name the competitor basis and conditions | SPEC | 표시광고법 시행령 제3조③ |

## 6. B2B SaaS and developer tools (`dev`, proposed)

| ID | Rule | Tier | Source |
|---|---|---|---|
| HW-D1 | Loanwords per 외래어 표기법 (셸터, 세트, 메시지); product names stay as their owners write them; an acronym once as "API(application programming interface)" | SPEC + DS | 국어기본법 제3조 3호; 길잡이 p. 88; Microsoft Korean style guide (2024) |
| HW-D2 | One register for the tool (Microsoft: 합니다 statements + 하세요 requests, 십시오 kept for EULA and legal text; SEED CLI: 해요체) | DS | Microsoft guide; SEED (R2) |
| HW-D3 | For developers, the message first and then the documented code: `파일을 찾을 수 없습니다. 경로를 확인하세요. (ENOENT)`. Never the code alone, never `undefined` (HW-4's TECH check still applies) | DS | Google tech-writing course (2025-03-31); Microsoft guide §5.4.2 |
| HW-D4 | One term per concept, the same label for the same destination | DS | KRDS 도움; Microsoft guide (approved terminology) |
| HW-D5 | Code, commands, flags, file and product names stay in English; the particle follows how the word is read (`API를`, `Git으로`) | DS + OP | Microsoft guide; particle rule is OP |

## 7. Finance disclosures and terms (`finance`, proposed)

| ID | Rule | Tier | Source |
|---|---|---|---|
| HW-F1 | Required ad sentences stay word for word: read the 설명서 and 약관 before signing; investment risk; past returns don't promise future returns; loan conditions. HW-7 and HW-11 don't rewrite them | SPEC | 금융소비자보호법 제22조③ |
| HW-F2 | No premium or loan interest per day (`하루 300원`) | SPEC | 제22조④1호다, 4호나 |
| HW-F3 | No 원금 보장, 손실 없음 or 확정 수익 on an investment product | SPEC | 제22조④2호가 |
| HW-F4 | Rates with their range, basis and timing; fees and side benefits stated | SPEC | 제22조④3호가, 4호가 |
| HW-F5 | 예금자보호 covers up to 1억 원 per depositor at one insured institution since 2025-09-01; "5천만 원까지 보호" is outdated | SPEC | 예금자보호법 제32조①②; 시행령 제18조⑦ |
| HW-F6 | Legal notices may stay 합쇼체 next to 해요체 UI (HW-11's legal exception) | DS | Microsoft guide (EULA); Apps in Toss promotion notice (R1) |

## 8. Notifications, messages and ad consent (`notify`, proposed)

| ID | Rule | Tier | Source |
|---|---|---|---|
| HW-N1 | An ad text, push or message opens with `(광고)` and the sender's name and contact, and ends with a free opt-out; an ad e-mail's subject starts with `(광고)`; nothing inserted to dodge filters (`(광 고)`) | SPEC | 정보통신망법 제50조④, 시행령 제61조③ 별표 6 |
| HW-N2 | Ad consent is labelled as ad consent (`광고성 정보 수신 동의`), not `혜택 알림` or `정보 제공`; a push ad leads straight to its opt-out | DS | KISA·방송미디어통신위원회 guide revision, 2026-03-04 |
| HW-N3 | 알림톡 carries information the recipient must get; no ad, app-install prompt, or coupon they didn't ask for | DS | 카카오 알림톡 심사 가이드 |
| HW-N4 | Ads sent 21:00–08:00 need separate consent (e-mail excepted) | SPEC | 정보통신망법 제50조③, 시행령 제61조② |

HW-N2 also touches the default `app` profile: a marketing-consent toggle in an app follows it.

## 9. Sources (verified 2026-10-24)

| Source | Version read | URL |
|---|---|---|
| 의료법 제27·42·45·56·57조 | 시행 2026. 10. 2., 법률 제21490호 | https://www.law.go.kr/법령/의료법/제56조 |
| 의료법 시행령 제23·24조 | 시행 2026. 2. 10., 대통령령 제36083호 | https://www.law.go.kr/법령/의료법시행령/제23조 |
| 대한의사협회 의료광고심의위원회, 다빈도 수정요청 사항 | posted 2025-09-18 | https://www.admedical.org/cscenter/notice_view.do?notice_seq=141 |
| 보건복지부, 불법의료광고 366건 적발 (보도참고자료) | 2024-03-11 | https://mohw.go.kr/board.es?act=view&bid=0027&list_no=1480602&mid=a10503010100 |
| 국립국어원 「쉬운 공문서 쓰기 길잡이」 (공공누리 제3유형) | 2022 edition | https://www.korean.go.kr/front/etcData/etcDataView.do?mn_id=&etc_seq=700&pageIndex=1 |
| 국어기본법 제3·14조; 시행령 제11조 | 시행 2026. 9. 3., 법률 제21743호; 시행령 대통령령 제35443호 | https://www.law.go.kr/법령/국어기본법/제14조 |
| 행정업무규정 제7조; 시행규칙 제2조 | 대통령령 제36728호; 행정안전부령 제408호 | https://www.law.go.kr/법령/행정업무의운영및혁신에관한규정/제7조 |
| 표시광고법 제3조; 시행령 제3조 | 법률 제20712호; 대통령령 제36416호 | https://www.law.go.kr/법령/표시ㆍ광고의공정화에관한법률/제3조 |
| 부당한 표시·광고행위의 유형 및 기준 지정고시 | 공정거래위원회고시 제2019-11호 | https://www.law.go.kr/행정규칙/부당한표시ㆍ광고행위의유형및기준지정고시 |
| 전자상거래법 제21조의2 | 시행 2026. 7. 21., 법률 제21312호 | https://www.law.go.kr/법령/전자상거래등에서의소비자보호에관한법률/제21조의2 |
| 금융소비자보호법 제22조 | 시행 2026. 1. 2., 법률 제21065호 | https://www.law.go.kr/법령/금융소비자보호에관한법률/제22조 |
| 예금자보호법 제32조; 시행령 제18조⑦ | 법률 제21065호; 시행 2025. 9. 1., 대통령령 제35687호 | https://www.law.go.kr/법령/예금자보호법시행령/제18조 |
| 정보통신망법 제50조; 시행령 제61조, 별표 6 | 법률 제21988호; 대통령령 제36728호 | https://www.law.go.kr/법령/정보통신망이용촉진및정보보호등에관한법률/제50조 |
| KISA, 광고 동의 모호한 표현 금지 (보도자료) | 2026-03-04 | https://www.kisa.or.kr/402/form?postSeq=2577 |
| 카카오 알림톡 심사 가이드 | no date on page | https://kakaobusiness.gitbook.io/main/ad/infotalk/audit |
| Microsoft Korean localization style guide | PDF of 2024-09-05 | https://aka.ms/korean-styleguide |
| Google Technical Writing, General error handling rules (CC BY 4.0) | updated 2025-03-31 | https://developers.google.com/tech-writing/error-messages/error-handling |
| im-not-ai taxonomy (MIT; IDs cited, no text adapted) | commit `b37e020` | https://github.com/epoko77-ai/im-not-ai |

The KMA board's standards change at its weekly meetings; recheck before citing them in a review. Statute text is quoted as fragments (not copyrighted under 저작권법 제7조); the KMA, MOHW and KISA pages are cited and paraphrased only.

## 10. Checker scope and limits

- `--context` applies to every file in the run; a file's pragma overrides it; an unknown pragma is reported as `CTX` (WARN) and the run's genre (or detection) applies. Without a flag, detection (§1) places `report`, `medical` and `public` files on strong evidence and the output names them; every other file gets the same output as before contexts existed. `--context=app` turns detection off.
- Detection reads one file at a time. A component with one clinic signal (a footer with the clinic's name) isn't placed even when the page beside it is; give the directory `--context=medical` or the file a pragma.
- `report` turns off HW-11's 합쇼체/해요체 check and HW-8's system-wording FYI, and adds HW-R1…R4. `medical` and `public` keep every HW rule and add theirs. `commerce`, `dev`, `finance` and `notify` change nothing in the checker yet.
- Legal text (a 약관 or privacy component or file) is skipped by HW-M*, HW-P1…P4 and HW-R*.
- The checker can't see whether a page is an ad, whether a hospital is designated, or whether a claim has a source. A clean run is not legal clearance; a medical or commerce hit is a prompt to read the string with whoever owns the claim.

## Unverified (not used as rules)

- A 보건복지부 고시 under 의료법 시행령 제23조③ (homepage-specific ad criteria): none found.
- An official list of patient-facing medical word pairs (국립국어원 or 식약처): not fetched.
- 공정위 「온라인 다크패턴 자율관리 가이드라인」 (2023) and any 지침 under 전자상거래법 제21조의2②: not fetched.
- A Korean public source prescribing conclusion-style slide titles (HW-R6 rests on the 길잡이's principle plus OP).
- The particle rule after English identifiers (HW-D5): common practice, no fetched source.
