# /hangul — writing by surface genre

HW-1 … HW-14 (`ux-writing.md`) describe app and service UI: one speech level per screen (the brand's, usually 해요체), the user's side, plain words, no pressure. That is the **default profile, `app`**. Other surfaces read differently. A slide deck speaks in 명사형 bullets and leads with its conclusion. A public notice is polite 합쇼체 laid out as steps. A clinic page explains before it invites. A developer error gives the message, then the code.

For seven genres, this file sets the three things that change:
- **말투**: speech level, register and attitude;
- **작성 방식**: how a string is built;
- **흐름**: the order information comes in.

Each genre also lists the rules the checker reports and a few watch-outs. DESIGN.md's voice, speech level and house spelling still win over every profile.

Laws and guidelines stand behind some watch-outs, and they change: an amendment renumbers a clause, a limit is raised, a review board revises its list. So no rule here fixes a figure, a date or a clause number. Those live in §9 as dated evidence, to be checked against the current version before anyone relies on them, and a clean checker run is never legal clearance.

Tiers as in `ux-writing.md`:
- **SPEC**: statute, 고시, orthography.
- **DS**: official guidance from a regulator, a statutory review body, 국립국어원, a platform policy or a published style guide.
- **DATA**: a measured result with a stated sample.
- **OP**: a company blog, a practitioner, or this skill's call.

Rule IDs: HW-R* report, HW-M* medical, HW-P* public, HW-C* commerce, HW-D* developer, HW-F* finance, HW-N* notification. The letter names where a rule came from, not where it applies: HW-P5 applies in every profile. "Checked" means `copy-check.mjs` reports it.

## 0. What every profile sets

| | What it decides | Default (`app`) |
|---|---|---|
| 말투 | speech level, register (formal, neutral, warm), how the reader is addressed, the attitude in good and bad moments | the brand's level (HW-11), usually 해요체; neutral and warm; the user's name or no address; calm on errors and money, no exclamation on success |
| 작성 방식 | sentence or noun-phrase form, length, lists or prose, how numbers and terms are written | short sentences from the user's side; verbs over noun stacks; one idea per sentence; three or more items become a list |
| 흐름 | the order information comes in, within a string and across a journey | what happened or what this is → why, only if needed → what to do next; the title states the point, the button repeats its verb |
| 어휘 | which words, and the same word for the same thing | plain words over jargon (HW-7); one term per concept across the whole flow |

Each genre below changes these settings; its rules follow from them.

## 1. Pick the profile first

| Profile | The request says | The repo shows | Checker |
|---|---|---|---|
| `app` (default) | 앱, 화면, 버튼, 토스트, 온보딩 | app routes, components, i18n message files | HW-1…14 |
| `report` | 보고서, PPT, 슬라이드, 장표, 회의 자료, 사내 문서 | a Marp, reveal.js or Slidev deck; a document the request names | HW-R1…R4 |
| `medical` | 병원, 의원, 치과, 한의원, 클리닉, 진료, 시술 | 진료과목, 의료진, 진료시간, 비급여, `/clinic`, `/doctors`, `/treatment` | HW-M1…M9 |
| `public` | 정부, 지자체, 공공기관, 민원, 공고, 공문 | a `.go.kr` site, KRDS components, 민원 forms | HW-P1…P5 |
| `commerce` | 랜딩, 상품 상세, 프로모션, 할인, 이벤트 | price, cart, checkout, `/event`, `/product` | HW-1…14 |
| `dev` | 개발자 도구, B2B 대시보드, CLI, API 문서 | `cli/`, `docs/`, error codes, SDKs | HW-1…14 |
| `finance` | 대출, 보험, 투자, 예금, 약관, 설명서 | rates, premiums, `/loan`, `/insurance` | HW-1…14 |
| `notify` | 알림톡, 문자, 푸시, 이메일, 광고 수신 동의 | message templates, push payloads, marketing-consent toggles | HW-1…14 |

Two can apply at once: a 국립대병원 site is `medical` + `public`, a fintech landing is `commerce` + `finance`. Apply both profiles; the checker takes one genre per file, so run it once per genre. Run the checker with `--context=<genre>`, or put a pragma in a file's first 10 lines (`<!-- hangul-context: medical -->`, `// hangul-context: report`, or a JSON key `"hangul-context": "public"`); the pragma wins.

Without either, the checker detects three genres on strong evidence, one file at a time, and names each file it placed with the signals that decided it:

- `medical`: two distinct clinic signals among the file's Korean strings (진료시간, 진료과목, 의료진, 휴진, 내원, 진료 예약, 원장 인사·소개, 야간 진료, 진료 안내, 접수 마감). A pet app's "동물병원 진료 예약" is one signal and stays `app`.
- `public`: two distinct public-sector signals (누리집, 민원, 정부24, 주민센터·행정복지센터, 정보공개, 공공데이터, 전자정부 in the text; a `.go.kr` or `gov.kr` link, KRDS `krds-` classes in the markup). One government link stays `app`.
- `report`: a slide-deck format marker only (reveal.js, Marp, Slidev). `report` switches HW-8 and HW-11 off, so a wrong guess would hide defects; a `reports/` or `slides/` folder (a dashboard, a carousel) and report-like wording never decide it.

Precedence: pragma, then `--context`, then detection, then `app`. `--context=app` turns detection off. When a page shows both clinic and public-sector signals, the stronger side wins (medical on a tie); run again with `--context` for the other.

## 2. Reports, slide decks and internal documents (`report`)

| | |
|---|---|
| 말투 | 명사형 (~함·~음·~임) for bullets; 합쇼체 or 해라체 for full sentences, one of them per document; never 해요체 |
| 작성 방식 | 개조식: one fact per line; figures with their unit, basis and date; an adjective only with a number behind it |
| 흐름 | the conclusion first (the slide title states it), then the evidence, then the decision or next step asked of the reader |
| 어휘 | the organization's own terms, defined once; plain Korean for buzzwords (`니즈` → `요구`) |

This inverts the `app` default: no 해요체, and HW-8's "say what the user did" gives way, since a report states what was done. HW-11's one-level rule still holds, at the level the genre sets. Short strings only: long narrative goes to omd-kr-writer (`biz-formal-report`), post-editing to omd-humanize.

| ID | Rule | Tier · checked | Basis |
|---|---|---|---|
| HW-R1 | No 해요체 statement in report or slide copy (WARN) | DS (every report example in 국립국어원's plain-document guide is 명사형, 해라체 or 합쇼체) + OP · ✓ | 국립국어원 「쉬운 공문서 쓰기 길잡이」 (보고서) |
| HW-R2 | One sentence level per document, 합쇼체 or 해라체; 명사형 bullets sit with either (FYI) | OP · ✓ | im-not-ai E-7; omd-humanize KO playbook |
| HW-R3 | 24-hour times: `오후 2시` → `14:00` (FYI) | SPEC for 공문서, convention elsewhere · ✓ | 행정업무규정 제7조 |
| HW-R4 | 명사형 lines all with or all without a final period (FYI) | SPEC allows both; consistency OP · ✓ | 「한글 맞춤법」 문장 부호 (마침표) |
| HW-R5 | One piece of information per bullet, and the bullet still agrees: `수준을 유지 중임` → `수준을 유지하고 있음` | DS · — | 길잡이 (보고서) |
| HW-R6 | A slide title states the conclusion (`3분기 매출, 목표보다 8% 높음`), not the topic (`3분기 실적`) | DS (core message first) + OP (title form) · — | 길잡이 (핵심 먼저) |
| HW-R7 | One numbering scheme for item levels; in a 공문서, the order the 행정업무규정 sets (1. → 가. → 1) → 가) …) | SPEC for 공문서 · — | 행정업무규정 시행규칙 제2조 |

| Before | After | Why |
|---|---|---|
| 매출이 전년 대비 12% 늘었어요 | 매출이 전년 대비 12% 늘었음. | HW-R1 |
| 3분기 실적 | 3분기 매출, 목표보다 8% 높음 | HW-R6 |
| 다음 회의: 11월 3일 오후 2시 | 다음 회의: 11. 3. 14:00 | HW-R3, HW-3 |
| 고객 니즈 지속 반영 | 고객의 요구를 계속 반영함 | 어휘 |

Hand-off: narrative paragraphs go to omd-humanize with im-not-ai families A (번역투), F (과도한 수식), I (형식명사; I-4 is move-only and keeps the obligation) and E-7. Don't apply C-1, C-2, C-3, C-9 or C-10 to 개조식 sections or real section titles; im-not-ai's own exceptions keep 학술·보고서 structure.

## 3. Hospital and clinic sites (`medical`)

| | |
|---|---|
| 말투 | calm and explanatory, at the clinic's own level (해요체 or 합쇼체); speak to the patient, not about the clinic |
| 작성 방식 | explain before inviting; what a treatment aims at, how it usually goes, its risks and its cost sit in the same place and the same size as its benefits |
| 흐름 | what the condition or treatment is → who it suits → how it goes (visits, recovery) → risks and costs → how to ask or book |
| 어휘 | medical terms with a plain gloss; no hype adjectives, rankings or speed promises |

Watch-outs. In Korea a clinic's own site counts as medical advertising, which is held to stricter rules than other ads (§9). The durable principles:
- Don't promise a result or a cure, and don't claim a treatment has no side effects, pain or recurrence.
- No superlatives, rankings or "first/only" claims without a checkable basis.
- No patient testimonials or before/after pictures, and nothing that rewards or lures patients (review rewards, waived copays, free procedures, first-come offers).
- A discount states the amount, who it is for, how long, and the regular price.
- Official titles (전문병원, certifications) only as granted, in the granted wording.
- The basics are easy to find: doctors and their specialties, hours, fees for non-covered care.

A pattern can't tell an advertisement from patient education, so every medical finding is at most WARN.

| ID | Rule | Tier · checked | Basis |
|---|---|---|---|
| HW-M1 | No guaranteed result or cure: 완치, 100% 효과·보장, 효과가 확실, 반드시 낫, 책임집니다 (WARN) | SPEC + DS · ✓ | 의료법 제56조, 시행령 제23조; KMA review board |
| HW-M2 | No absolute about harm: 부작용·통증·흉터 없는, 걱정 없는, 거의 없어요 (WARN) | SPEC + DS · ✓ | 의료법 제56조; KMA review board FAQ |
| HW-M3 | No superlative or exclusive claim: 최고, 최초, 유일, 최상, 최첨단, 획기적, No.1, 1위, 최신 장비 (WARN) | SPEC + DS · ✓ | 의료법 제56조; KMA review board |
| HW-M4 | No patient testimonial or before/after: 치료 후기, 체험기, 경험담, 치료 사례, 전후 사진 (WARN) | SPEC · ✓ | 의료법 제56조, 시행령 제23조; MOHW enforcement |
| HW-M5 | No patient inducement: review rewards, 본인부담금 면제·할인, 무료 시술·검사, 선착순, referral perks (WARN) | SPEC · ✓ | 의료법 제27조; MOHW enforcement |
| HW-M6 | A discount or event on non-covered care states the amount, who, the period and the regular price (FYI) | SPEC · ✓ | 의료법 제56조, 시행령 제23조; MOHW enforcement |
| HW-M7 | 전문병원 only as designated, in the designated form; for a focus area `중점진료` or `집중진료`, not 전문·특화·노하우 (FYI) | SPEC + DS · ✓ | 의료법 제42·56조; KMA review board |
| HW-M8 | No endorsement, award or third-party certification beyond the official ones (FYI) | SPEC · ✓ | 의료법 제56조; KMA review board |
| HW-M9 | Speed and ease claims overstate a treatment: 당일 시술, 빠른 회복, 한번에 해결, 1:1 맞춤, 비결·근본; describe the process instead. The CTA `알아보기` reads as an ad; `문의하기` says what happens (FYI) | DS · ✓ | KMA review board |
| HW-M10 | Side effects, cautions and non-covered prices are never set small (so HG-3's 13px "skippable" tier never applies to them) | SPEC (derived) · — | 시행령 제23조 (derived) |
| HW-M11 | The basics are said plainly: name, address, phone, departments, doctors with licenses and specialties, hours, non-covered prices | SPEC · — | 의료법 제45·57조, 시행령 제24조 |
| HW-M12 | Career lines say 졸업/수료, not 출신; 전문의 only in a legal 전문과목 (`내과 전문의`, not `내시경 전문의`) | SPEC + DS · — | 시행령 제23조; KMA review board |

| Before | After | Why |
|---|---|---|
| 허리 디스크, 비수술로 완치해 드려요 | 허리 디스크 비수술 치료는 통증을 줄이는 것을 목표로 해요 | HW-M1, 말투 |
| 부작용 없는 시술 | 시술 후 통증, 붓기, 감염 같은 부작용이 생길 수 있어요 | HW-M2, HW-M10 |
| 지역 최고의 의료진 | 정형외과 전문의 3명이 진료해요 | HW-M3, HW-M11 |
| 생생한 치료 후기 / 후기 쓰면 커피 쿠폰 | (remove) | HW-M4, HW-M5 |
| 도수치료 70% 할인 이벤트 | 도수치료 1회 ○○원 (비급여 진료비용 안내) | HW-M6, HW-M11 |
| 척추 전문병원 | 척추 중점진료 | HW-M7 |
| 더 알아보기 | 진료 예약 문의하기 | HW-M9, HW-5 |

Known false positives (read in context): a goal ("통증 없이 걸을 수 있도록 치료 목표를 세워요"), health advice ("유일한 예방법은 금연이에요"), limited vaccine stock ("백신은 선착순으로 접종해요"), a request not to post reviews. Hand-off: 진료 소개, 원장 인사말 and disease explanations go to omd-humanize (im-not-ai A, F, D-2, I), with the rule that a rewrite never adds a superlative, a guarantee, a testimonial or a recovery time.

## 4. Public sector (`public`)

| | |
|---|---|
| 말투 | polite 합쇼체 (`~하십시오`, `~하기 바랍니다`) or the institution's 해요체; never a command (`~할 것`, `~하라`) |
| 작성 방식 | plain Korean; a foreign term only after the Korean, in parentheses (`자주 묻는 질문(FAQ)`); one step per line |
| 흐름 | who it is for → what to do → when and where → what to bring → whom to ask |
| 어휘 | neutral, respectful terms (`장애인`); uncommon abbreviations and jargon spelled out (HW-7) |

A public institution's website posts count as official documents under Korean language law, which asks for plain words and Hangul (§9). HW-11's consistency still applies, and dates and times follow HW-3.

| ID | Rule | Tier · checked | Basis |
|---|---|---|---|
| HW-P1 | `~할 것` as an order → `~하세요`, `~해야 합니다` (FYI) | DS · ✓ | 길잡이 (고압적 표현) |
| HW-P2 | `~ 바람` → `~하기 바랍니다`, `~해 주시기 바랍니다` (FYI) | DS · ✓ | 길잡이 (고압적 표현) |
| HW-P3 | `~하라` → `~하십시오`, `~하세요` (FYI) | DS · ✓ | 길잡이 (고압적 표현) |
| HW-P4 | `~다 할 것이다` → `~다` (FYI) | DS · ✓ | 길잡이 (고압적 표현) |
| HW-P5 | `장애자`, `장애우` → `장애인` (WARN; **every profile**, owner 2026-10-25) | DS · ✓ | 길잡이 (차별적 표현) |
| HW-P6 | No English-only labels on a public site: `FAQ` → `자주 묻는 질문(FAQ)`, `Contact` → `문의` | SPEC · — | 국어기본법 제3·14조, 시행령 제11조 |
| HW-P7 | Uncommon abbreviations and jargon avoided; HW-7's pairs apply | SPEC · (HW-7) | 행정업무규정 제7조 |

| Before | After |
|---|---|
| 신청서는 방문 전에 미리 작성할 것. | 신청서는 방문 전에 미리 작성해 주세요. |
| 자세한 사항은 전화로 문의 바람. | 자세한 사항은 전화로 문의하기 바랍니다. |
| 신분증을 반드시 지참하라. | 신분증을 꼭 지참하십시오. |
| 장애우 전용 창구 | 장애인 전용 창구 |

## 5. Commerce and marketing pages (`commerce`)

| | |
|---|---|
| 말투 | the brand's level; confident, never urgent |
| 작성 방식 | the fact first (what it is, what you get, what it costs), the adjective after or not at all; conditions beside the claim, at the same size |
| 흐름 | what it is → what it costs in total → conditions and limits → how to buy, cancel or return |
| 어휘 | concrete nouns and numbers; no 최고·역대급·파격 without a basis on the same screen |

Watch-outs (reference only, not checked):

| ID | Rule | Tier | Basis |
|---|---|---|---|
| HW-C1 | A comparative or "first/only/No.1" claim shows its basis beside it: who measured, when, against what. Subjective taste ("맛있는") is not such a claim | SPEC | 표시광고법 제3조; 공정위 고시 (부당한 표시·광고) |
| HW-C2 | A discount rate is computed from the price actually charged before it | SPEC | 공정위 고시 (가격) |
| HW-C3 | The first screen that shows a price shows the total the buyer pays | SPEC | 전자상거래법 제21조의2 |
| HW-C4 | Declining, cancelling and unsubscribing are as plain as accepting; nothing pre-checked; one confirmation, not a loop | SPEC; HW-12 | 전자상거래법 제21조의2 |
| HW-C5 | "타사 대비" names the basis and conditions of the comparison | SPEC | 표시광고법 시행령 제3조 |

## 6. Developer tools and B2B (`dev`)

| | |
|---|---|
| 말투 | neutral and exact: 합니다 statements with 하세요 requests, or the product's 해요체 |
| 작성 방식 | the message, then the action, then the code; code, commands, flags and product names stay in English |
| 흐름 | what failed → why, if known → what to run or change → where to read more |
| 어휘 | one term per concept across the tool; loanwords per 외래어 표기법 |

Reference only, not checked:

| ID | Rule | Tier | Basis |
|---|---|---|---|
| HW-D1 | Loanwords per 외래어 표기법 (셸, 세트, 메시지); product names stay as their owners write them; an acronym once spelled out: "API(application programming interface)" | SPEC + DS | 국어기본법 제3조; 길잡이; Microsoft style guide |
| HW-D2 | One register for the tool: 합니다 statements with 하세요 requests (십시오 kept for EULA and legal text), or 해요체 | DS | Microsoft style guide; SEED |
| HW-D3 | For developers, the message first and then the documented code: `파일을 찾을 수 없습니다. 경로를 확인하세요. (ENOENT)`. Never the code alone, never `undefined` (HW-4's code check still applies) | DS | Google Technical Writing; Microsoft style guide |
| HW-D4 | One term per concept, and the same label for the same destination | DS | KRDS; Microsoft style guide |
| HW-D5 | Code, commands, flags, file and product names stay in English; the particle follows how the word is read (`API를`, `Git으로`) | DS + OP | Microsoft style guide |

## 7. Finance (`finance`)

| | |
|---|---|
| 말투 | calm and exact; never casual about loss, debt or risk |
| 작성 방식 | the condition beside the benefit and the risk beside the return; exact figures with their basis and date |
| 흐름 | what it is → what it costs or earns (range and basis) → risks and conditions → how to stop or cancel |
| 어휘 | plain words for jargon (HW-7); a term the law requires stays, with a gloss |

Watch-outs (reference only, not checked):

| ID | Rule | Tier | Basis |
|---|---|---|---|
| HW-F1 | Required disclosure sentences stay word for word; HW-7 and HW-11 don't rewrite them | SPEC | 금융소비자보호법 제22조 |
| HW-F2 | No premium or interest framed per day (`하루 300원`) | SPEC | 금융소비자보호법 제22조 |
| HW-F3 | No 원금 보장, 손실 없음 or 확정 수익 on an investment product | SPEC | 금융소비자보호법 제22조 |
| HW-F4 | Rates with their range, basis and timing; fees stated | SPEC | 금융소비자보호법 제22조 |
| HW-F5 | Legal figures (deposit protection limits, caps, rates) come from the current official source at the time of writing, never from memory or an old page | OP (owner 2026-10-25: no fixed figure here; §9 has the one that was current on 2026-10-24) | 예금자보호법 (current limit: §9) |
| HW-F6 | Legal notices may stay 합쇼체 beside 해요체 UI (HW-11's legal exception) | DS | Microsoft style guide (EULA); Apps in Toss notice |

## 8. Notifications, messages and consent (`notify`)

| | |
|---|---|
| 말투 | the brand's level in its shortest form |
| 작성 방식 | the first line says who and what; one action per message; a link's text says where it goes |
| 흐름 | what happened or what's new → what to do → for an ad, how to stop receiving it |
| 어휘 | no clickbait or fake urgency (HW-12) |

| ID | Rule | Tier · checked | Basis |
|---|---|---|---|
| HW-N1 | An ad message says it's an ad at the start, names the sender, and ends with a free way to opt out | SPEC · — | 정보통신망법 제50조, 시행령 제61조 |
| HW-N2 | Consent to ads is labelled as consent to ads (`광고성 정보 수신 동의`), not as a benefit (`혜택 알림 받기`) | DS · ✓ as HW-12 in every profile (FYI; owner 2026-10-25) | KISA guidance (§9) |
| HW-N3 | Informational channels (알림톡) carry only what the recipient must get: no ad, install prompt or coupon they didn't ask for | DS · — | 카카오 알림톡 심사 가이드 |
| HW-N4 | Ads at night need separate consent | SPEC · — | 정보통신망법 제50조, 시행령 제61조 |

## 9. Sources (dated evidence)

Read and verified on 2026-10-24. Laws, decrees and guidelines are amended; check the current version before quoting a clause, a figure or a list. Dated facts that were current on that day and are kept out of the rules above:
- 예금자보호 covered up to 1억 원 per depositor at one insured institution from 2025-09-01; the old 5천만 원 wording was outdated (HW-F5).
- 보건복지부 treated discounts of 50% or more on non-covered care as excessive inducement in a 2017 enforcement release (HW-M6).
- The KMA review board's list of frequent corrections was posted on 2025-09-18 and changes at its weekly meetings (HW-M9).
- KISA's guidance against labelling ad consent as a benefit was published on 2026-03-04 (HW-N2).
- Ads sent between 21:00 and 08:00 needed separate consent, e-mail excepted (HW-N4).

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

Statute text is quoted only as fragments (not copyrighted under 저작권법 제7조); the KMA, MOHW and KISA pages are cited and paraphrased.

## 10. Checker scope and limits

- `--context` applies to every file in the run; a file's pragma overrides it; an unknown pragma is reported as `CTX` (WARN) and the run's genre (or detection) applies. Without a flag, detection (§1) places `report`, `medical` and `public` files on strong evidence and the output names them. `--context=app` turns detection off.
- `report` turns off HW-11's 합쇼체/해요체 check and HW-8's system-wording FYI, and adds HW-R1…R4. `medical` and `public` keep every HW rule and add theirs. `commerce`, `dev`, `finance` and `notify` change nothing in the checker.
- Two checks run in every profile (owner 2026-10-25): HW-12 notes a short consent label that reads as a benefit (`혜택 알림 받기`), and HW-P5 flags `장애자`, `장애우`. A privacy-consent label (`개인정보 제3자 제공 동의`) and a sentence about benefit notices stay quiet.
- Legal text (a 약관 or privacy component or file) is skipped by HW-M*, HW-P1…P4 and HW-R*.
- Detection reads one file at a time. A component with one clinic signal (a footer with the clinic's name) isn't placed even when the page beside it is; give the directory `--context=medical` or the file a pragma.
- The checker can't see whether a page is an ad, whether a hospital is designated, or whether a claim has a source. A clean run is not legal clearance; a medical or commerce hit is a prompt to read the string with whoever owns the claim.

## Unverified (not used as rules)

- A 보건복지부 고시 under 의료법 시행령 제23조③ (homepage-specific ad criteria): none found.
- An official list of patient-facing medical word pairs (국립국어원 or 식약처): not fetched.
- 공정위 「온라인 다크패턴 자율관리 가이드라인」 (2023) and any 지침 under 전자상거래법 제21조의2②: not fetched.
- A Korean public source prescribing conclusion-style slide titles (HW-R6 rests on the 길잡이's principle plus OP).
- The particle rule after English identifiers (HW-D5): common practice, no fetched source.
