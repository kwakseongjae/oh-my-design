---
name: omd:kr-writer
description: "한국어 글쓰기 멀티-preset 스킬. 12개 preset 지원 — toss-tech-design (default) / karrot-neighborly / brunch-maker-popular / naver-d2-engineering / biz-formal-report / academic-paper / journalism-broadsheet / kakao-warm-product / line-global-saas / academic-lecture-essay / emotional-brand / legal-disclosure. '한글 글 작성', 'KR rewrite', '토스 톤으로', '당근 톤으로', '브런치 톤으로', '보고서로 써줘', '학술 톤', '신문기사체' 류 트리거."
user-invocable: true
---

# omd:kr-writer

oh-my-design의 한국어 본문 작성 스킬. **preset_id 인자**로 6개 voice 중 선택.

## 0. preset_id 인자

호출 envelope:

```yaml
agent: omd-kr-writer
inputs:
  preset_id: toss-tech-design  # 또는 아래 6개
  task: "당근 디자인 분석 글 작성"
  ...
```

지원 preset 12개. **자세한 9-field spec + verbatim 한국어 examples**: `data/research/2026-05-18-kr-style-presets.md`

| # | preset_id | 종결 | 분량 (한글) | 용도 |
|---|---|---|---|---|
| 1 | `toss-tech-design` ⭐ (default) | 해요체 -요 | 5,500~7,000자 | omd 블로그 본문, 디자인 deep-dive |
| 2 | `karrot-neighborly` | 해요체 + 동네 lexicon | 3,000~5,000자 | 마케팅, 커뮤니티 글 |
| 3 | `brunch-maker-popular` | 해요체 80% + 회상 `-했다` | 4,000~6,000자 | 회고, 포스트모템, 메이커 에세이 |
| 4 | `naver-d2-engineering` | 해요체 + 격식 mix | 자유 | 엔지니어링 분석 글 |
| 5 | `biz-formal-report` | 하십시오체 -습니다 | 자유 | 보고서·기획서·BRD |
| 6 | `academic-paper` | 해라체 `-한다`/`-이다` | 자유 | 학술 논문, 연구 노트 |
| 7 | `journalism-broadsheet` | 해라체 `-다`/`-했다` | 자유 | 보도자료, 신문기사 |
| 8 | `kakao-warm-product` | 해요체 + 감정 표현 | 자유 | 카카오톡·카카오뱅크 in-app copy |
| 9 | `line-global-saas` | 해요체 + 다국어 친화 | 자유 | 한일 brand voice, 글로벌 SaaS |
| 10 | `academic-lecture-essay` | 해요체 + 학술 lexicon | 자유 | 교양 강연, 지식 에세이 |
| 11 | `emotional-brand` | 해요체 + 외래어 자유 | 자유 | 무신사·29CM 패션 커머스 |
| 12 | `legal-disclosure` | 하십시오체 + 한자어 | 자유 | 법무·약관·고지사항 |

**호출 시 preset 미지정 → `toss-tech-design` 적용.**

본 문서의 § 1~8은 default preset (`toss-tech-design`)의 상세 spec. 다른 preset 선택 시 research doc의 해당 section 룰로 substitution.

### 전환 매트릭스 (자주 쓰는 6개)

같은 콘텐츠를 다른 preset으로 옮길 때 standard rewrite 룰. 자세한 5-step rule은 research doc §14 참조.

| from | to | 핵심 변환 |
|---|---|---|
| `biz-formal-report` | `toss-tech-design` | `-합니다`→`-해요` · 한자어 풀이 · 50자+ 문장 쪼개기 · 3인칭→1인칭 |
| `toss-tech-design` | `biz-formal-report` | `-요`→`-니다` · 인사 제거 · 섹션 번호 (1.1) · 한자어 회복 |
| `academic-paper` | `toss-tech-design` | `-한다`→`-해요` · `우리는`→`저는` · 인용 형식 인라인 |
| `karrot-neighborly` | `toss-tech-design` | "동네" lexicon 제거 · 분석 voice 강화 · 5,500자+ |
| `journalism-broadsheet` | `toss-tech-design` | `-다`→`-요` · OOO 대표 said → 직접 quote · narrative 1인칭 |
| `legal-disclosure` | `kakao-warm-product` | 한자어 → 우리말 · 수동 → 능동 · 친근 어휘 보강 |

### 한국어 어말어미 — 6단계 speech level

| 단계 | 격식 | 친근 | 종결예 | preset 매핑 |
|---|---|---|---|---|
| 하십시오체 | ✓ | ✗ | -습니다 | biz-formal / legal |
| 하오체 | ✓ | ✗ | -오, -소 | (구식, 거의 안 씀) |
| 하게체 | △ | △ | -네, -게 | (구식, 윗사람→아랫사람) |
| 해라체 | ✗ | ✗ | -다, -한다 | academic / journalism |
| 해요체 ⭐ | △ | ✓ | -요, -아요 | toss / karrot / kakao / brunch / line / lecture / emotional |
| 해체 (반말) | ✗ | ✓✓ | -아, -이야 | (사용 안 함 — disrespectful) |

omd 디폴트는 **해요체**. 격식이 필요하면 하십시오체. 학술/뉴스만 해라체. 그 외 모든 경우 해요체.

---

## Default preset (toss-tech-design)

oh-my-design 블로그의 한국어 본문을 **Toss Tech 디자인 카테고리** 수준의 voice로 작성. Brunch와 당근 미디엄도 보조 참고.

## 1. Voice DNA — 한국 디자인 블로그 명문 공통 패턴

### 첫 단락 fingerprint (변형 가능)

```
안녕하세요. [본인 직무] [본인 이름]이에요.
저는 [구체적인 업무]를 담당하고 있어요.
[배경 1-2 문장 — 어떤 상황에서 어떤 미션을 받았는지].
오늘은 [주제]를 나눠보려고 해요.
```

oh-my-design용 변형:
```
안녕하세요. oh-my-design을 만드는 [이름]이에요.
100개가 넘는 브랜드의 디자인 시스템을 라이브로 캡쳐해서 카탈로그로 모으고 있어요.
오늘은 그 중 [브랜드]를 들여다본 이야기를 나누려고 해요.
```

### 종결 어미 룰

| 사용 | 빈도 |
|---|---|
| `-요` | **100%** (default) |
| `-했어요`, `-있어요`, `-거예요`, `-네요` | 자주 |
| `-아요`, `-이에요` | 자주 |
| `-습니다`, `-는다`, `-한다` | **금지** (관공서 톤) |
| `-입니다`, `-합니다` | **금지** |

### 문장 호흡

- **평균 35~50자/문장**. 80자+ 문장 = 쪼개기.
- 두 문장 연결: `~했고, ~했어요.` → 가급적 `~했어요. ~했어요.` 두 문장으로.
- 접속사 `그리고`/`그래서`/`그런데` 남발 금지. 단락 이행은 새 단락으로.
- 감탄/조사 `~네요`, `~죠`, `~인가요?` 적절히 — 글이 살아남.

### 단락 길이

- **평균 3~5 문장 / 단락**. 80자+ 단락 = 쪼개기.
- 한 줄 단락 OK — 강조용.
- 글 전체에서 80% 이상이 짧은 단락.

### 첫 인사 + 마지막 인사

```
시작: "안녕하세요. ~이에요."
마무리: 
  - "여기까지 [주제]에 대해 나눠봤어요."
  - "혹시 [관련 질문]이 있다면 댓글로 남겨주세요."
  - "다음 글에서는 [다음 주제]를 들고 올게요."
```

## 2. 구조 템플릿 — 디자인 시스템 분석 글

### 한국어 H2 헤더 패턴

영문 식 `## Insight 1 — OKLCH-based perceptual color scaling` 같은 무거운 헤더는 금지. 한국어는 **짧고 호흡감 있게**.

| 영문 패턴 | 한국어 변환 |
|---|---|
| `## 1. A short history of "the Toss feel"` | `## 토스 느낌의 시작` |
| `## 2. The atmosphere — calm, confident, deceptively simple` | `## 화면을 열면 흰 캔버스` |
| `## 3. Insight 1 — OKLCH-based perceptual color scaling` | `## 토스는 색을 수학으로 정의해요` |
| `## 4. What to steal` | `## 가져가도 좋은 것` |
| `## 5. What NOT to steal` | `## 따라하면 안 되는 것` |

원칙: 헤더는 **3~12자**. 문장형 OK, 호기심 유발 OK, 결론 spoiler OK.

### 권장 글 구조 (5,500자+ 목표)

1. **인사 + 글 소개** (~300자) — 안녕하세요 인사 + 오늘 분석할 브랜드 소개 + 어떻게 분석했는지
2. **브랜드 배경** (~600자) — 회사 역사 짧게, 디자인이 왜 지금처럼 됐는지
3. **첫 인상 — 화면을 열면** (~700자) — 시각 톤, 색, 타입, 첫 느낌
4. **인사이트 1** (~700자) — 발견 1개, 왜 중요한지, 어떻게 따라할지
5. **인사이트 2** (~700자)
6. **인사이트 3** (~700자)
7. **인사이트 4** (~700자)
8. **인사이트 5** (~600자) — 더 짧아도 OK
9. **가져가도 좋은 것** (~400자) — 5개 정리 (불릿 OK)
10. **따라하면 안 되는 것** (~400자) — 5개 정리
11. **마무리 + CTA** (~200자) — MCP 설치, design-system 페이지 링크

목표: **5,500자~7,000자** (한국어, 공백 제외).

## 3. 이미지/figure 정책

Toss 글은 단락 2~3개 당 이미지 1개. oh-my-design 본문에서:

- **헤로 이미지**: 글 첫머리, 브랜드 색감 + 타이포 한 컷
- **인사이트 1~5 각**: 1~2개 이미지 (스크린샷 / 다이어그램 / 컬러 그리드)
- **figcaption 짧게**: "토스 송금 화면" / "OKLCH 컬러 그리드" / "토스 vs KB의 헤로 비교"
- **alt 텍스트는 단순한 설명만** — figcaption과 다른 정보

이미지가 부족한 경우:
- 라이브 캡쳐 (browser-harness로 brand site 스크린샷)
- CSS 비주얼 컴포넌트 (ColorSwatchGrid, TypeSample 등)
- 다이어그램 (인라인 SVG, primitive → semantic → component 같은 토큰 트리)

## 4. 인사이트 본문 패턴

각 인사이트는 다음 4 단락 구조 권장:

1. **현상 단락**: "토스를 열면 이상한 게 있어요. ~" — 호기심 hook
2. **데이터 단락**: "실제로 CSS 번들을 뜯어보니, ~ 81번 등장하더라구요." — 숫자/증거
3. **이유 단락**: "왜 이렇게 했을까요? ~" — 디자인 thesis
4. **적용 단락**: "여러분 작업에 가져가려면, ~" — actionable

## 5. 안티패턴 (절대 금지)

- ❌ `-습니다`, `-한다`, `-할 것이다` 등 격식체
- ❌ `~할 수 있다` 식 가능형 남발 → `~할 수 있어요`
- ❌ 영어를 한글로 번역만 한 듯한 문장 (`이것은 우리가 만든 시스템이다` — X. `우리가 만든 시스템이에요.` — O)
- ❌ 영문 인용 부호 그대로 (`"trust comes from clarity"`) → `"신뢰는 깊이가 아니라 명확함에서 온다"` (한글 번역 + 영문 옆에 작게)
- ❌ 머리말 `## 1. 인사이트 1 — Insight 1: OKLCH-based ~` 식 형식적 헤더
- ❌ 마지막에 "감사합니다." 한 줄 → 톤 깨짐. 차라리 안 쓰기.
- ❌ 문단 사이를 `**굵게**` 강조로 도배 — 시각 노이즈
- ❌ 5,000자 미만 분량 (5분 안 채워짐)

## 6. 어휘 가이드

| 어색한 한자어 | 친근한 한국어 |
|---|---|
| 사용자 | 쓰는 사람 / 사용자 (case-by-case, 사용자도 OK) |
| 설계하다 | 설계하다 / 만들다 |
| 적용하다 | 적용하다 / 쓰다 |
| 결과적으로 | 결국 / 그렇게 |
| 비교했을 때 | 비교하면 |
| ~에 의하면 | ~에 따르면 |
| 또한 | 그리고 / 또 |
| 따라서 | 그래서 |
| 본인 | 본인 / 자신 / 나 |
| 일반적으로 | 보통 |

## 7. 실행 절차

1. 영문 원문 본문을 가져옴 (`content/posts/<slug>/index.md`의 EN 부분)
2. 각 H2 섹션을 한 번에 1개씩 KR로 옮김
3. 첫 단락에 "안녕하세요 ~" intro 삽입
4. H2 헤더를 짧은 한국어로 다시 작성
5. 종결어미 100% `-요`로 통일
6. figure placeholder `![설명](./images/...png "figcaption")` 삽입 — 인사이트당 1~2개
7. 마지막에 "여기까지 ~ 나눠봤어요" 마무리
8. 글 끝에 frontmatter의 `title_ko`, `subtitle_ko` 필드 채움

## 8. Quality bar

- 분량: 5,500자~7,000자 (공백 제외, 한국어 본문)
- 종결어미 `-습니다` / `-한다` 검사 = 0건
- 인사이트당 평균 ≥ 2 figure placeholder
- 첫 단락 "안녕하세요" 인사 포함
- 가져가도 좋은 것 / 따라하면 안 되는 것 = 각 5개

---

이 스킬은 oh-my-design 블로그 한국어 본문의 **단일 source of truth voice guide**. 모든 KR 글은 이 guide를 따른다.
