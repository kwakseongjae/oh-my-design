---
name: omd:locale-adapter
description: "한국어 본문을 EN/JP/ZH-TW로 **번역이 아닌 adaptation**. 문화 레퍼런스 swap, JP honorific 정합, ZH-TW 번체 idiom. KR은 항상 source of truth. '다국어 적용', 'EN 버전 만들어줘', 'JP로 옮겨줘' 류 트리거."
user-invocable: true
---

# omd:locale-adapter

KR 본문을 받아 EN/JP/ZH-TW로 **adapt**한다. 직역이 아니라 각 문화의 디자인 블로그 voice로 다시 쓴다.

참조: Frontitude brand-voice translation model, LINE localization playbook.

## 0. Source of truth

**KR이 canonical**. EN/JP/ZH-TW는 derivative. KR이 갱신되면 다른 locale도 무효화.

## 1. 대상 locale별 룰

### 1.1 EN (en)

- Voice baseline: Stripe Press / Linear changelog / Vercel blog
- 문장 길이: 15~25 words (KR 35~50자 ≈ EN 15~25 words)
- 1인칭: "we" or "I" 자연스럽게
- 문화 swap:
  - "토스" → "Toss (Korea's leading fintech)" (첫 출현만)
  - "당근" → "Karrot (a hyperlocal Korean marketplace)"
  - 김치/돌잔치 등 강한 KR-only ref → 영미권 equivalent or 짧은 gloss
  - "안녕하세요" 인사 → "Hi, I'm [name]." 또는 informal opener
- 분량: KR 자수의 0.45~0.55 (영어가 짧음)
- 헤더: KR 짧은 헤더 → EN은 좀 더 descriptive OK ("토스 느낌의 시작" → "What gives Toss its 'feel'")

### 1.2 JP (ja)

- Voice baseline: note.com デザイン カテゴリ, クックパッド開発者ブログ
- 종결: です・ます 일관 (敬体)
- 격식 register: 영미보다 한 단계 더 정중
- 문화 swap:
  - "토스" → "Toss (韓国最大級のフィンテック)"
  - 한국 특유의 이웃문화 ref → 일본식 「ご近所」 비유
  - 존경어/겸양어 자연스럽게 ("저는 ~한다고 생각해요" → "私は〜と考えています")
- 분량: KR 자수의 0.85~1.0
- 헤더: 한국어 짧은 헤더와 비슷한 호흡 ("토스 느낌の始まり")
- 한자: 常用漢字 위주. 어려운 한자는 仮名 병기.

### 1.3 ZH-TW (zh-tw)

- Voice baseline: 數位時代, INSIDE 硬塞網
- **번체** (簡体 금지). 「設計」「顯示」「優化」.
- 문화 swap:
  - "토스" → "Toss (南韓金融科技龍頭)"
  - "당근" → "Karrot (南韓地區型二手交易平台)"
  - 한국 idiom → 中華圈 idiom (가능한 경우)
- 분량: KR 자수의 0.6~0.75
- 인용부호: 「」 사용
- 헤더: KR 짧은 헤더와 비슷한 호흡 (「Toss 給人的感覺，從何而來」)

## 2. Adaptation 7단계 절차

1. KR canonical 본문 + 출간된 frontmatter 읽기
2. 글 전체 thesis 한 줄로 추출 (locale 다 동일해야 함)
3. 각 H2 섹션을 1개씩 옮김 — **문장 단위 직역 금지**, 단락 단위 의역
4. 문화 ref 발견 시 위 swap 룰 적용 + 첫 출현에 gloss
5. 인용/코드/URL/figure src는 그대로 보존
6. 헤더 number 일관성 유지 (KR=5 H2면 다른 locale도 5)
7. frontmatter `title_<locale>`, `subtitle_<locale>` 채우기

## 3. 보존 (절대 변경 금지)

- 코드 블록 내부 (변수명, 함수명, 주석 영문 유지)
- URL, 파일 경로
- 사람 이름 / 회사명 (단, 첫 출현에 gloss는 OK)
- figure src
- frontmatter slug
- 수치 / 통계

## 4. 비전형 케이스

| 원문 | 대응 |
|---|---|
| KR 특유의 이모지 사용 패턴 (`ㅎㅎ`, `^^`) | EN/JP/ZH-TW에서 제거. 톤은 다른 방식으로 표현. |
| 한자어 농담 | locale 등가 농담 없으면 그냥 의미만 유지하고 농담 톤 표시 |
| `안녕하세요` 같은 의례 인사 | EN은 informal greeting, JP는 「こんにちは」, ZH-TW는 「大家好」 |
| Toss/당근 같은 회사명 인지도 차이 | 첫 등장에서 1줄 gloss, 이후 그대로 |

## 5. 출력 형식

```
content/posts/<slug>/index.ko.md    ← source
content/posts/<slug>/index.en.md    ← this skill 생성
content/posts/<slug>/index.ja.md
content/posts/<slug>/index.zh-tw.md
```

각 파일 frontmatter에:
```yaml
locale: en
source_locale: ko
source_revision: <git sha of ko at time of adaptation>
adapted_at: <ISO date>
```

## 6. 품질 체크 (self-audit)

각 locale 생성 후 writer가 직접 검증:
- H2 카운트가 KR과 일치
- 인용 / 통계 누락 0건
- figure src 경로 일치
- 분량이 위 1.x의 비율 범위
- 첫 출현 회사명 모두 gloss 처리됨
- 코드 블록 변경 0건

미달 시 동일 locale 재작성 (orchestrator round 카운터 증가).

## 7. KR 갱신 시 staleness

KR이 수정되면 EN/JP/ZH-TW의 `source_revision`이 outdated. orchestrator가 다시 호출. 부분 갱신 가능 (수정된 H2 섹션만 re-adapt).

## 8. Anti-patterns

- ❌ Google Translate 톤 — 직역 흔적
- ❌ KR-only ref를 그대로 둠 (예: "강남에서 일하는데" → 영어판에 그대로)
- ❌ 분량 mismatch (EN이 KR과 같은 자수)
- ❌ 헤더 number 불일치
- ❌ KR 없이 EN을 먼저 작성 (KR=canonical 원칙 위배)
