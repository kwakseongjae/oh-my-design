# 우리가 만든 것이 곧 AI 기본값이었다 — 점수 정체의 구조적 원인 (2026-09-05)

> 발견: r5 리서치 레인 E. 근거 원문: `anthropics/claude-code` 의 `plugins/frontend-design` SKILL.md
> ("AI 생성 디자인 5대 군집"), Nutlope/hallmark 안티슬롭 게이트, sailop 안티슬롭 템플릿.
> 대상: `test-v2/content-runs/aphrodite/higgsgen/` r1~r4 전 라운드가 공유하는 DESIGN.md.

## 1. 한 줄 결론

**힉스젠은 Anthropic 자신이 "AI가 자유축을 받으면 흘러가는 기본값"으로 지목한 군집 두 개에 정면으로 해당한다.**
색은 군집 #2(니어블랙 + 단일 밝은 애시드 액센트), 크롬은 군집 #5(템플릿 크롬)다.
r0 의 첫 지적이 "브랜드 성격이 엄청 밋밋해"였는데, 우리는 r1~r4 내내 **팔레트와 크롬을 한 번도 건드리지 않았다.**
효과·크기·무관문·타이밍을 다 고쳐도 60~70 에서 멈춘 이유의 유력 후보다.

## 2. 원문과 대조 (실측 카운트, `runs/template-r4.html`)

### 군집 #2 — "a near-black background with a single bright acid-green or vermilion accent"

| 항목 | 우리 값 | 판정 |
|---|---|---|
| 배경 | `#0B0C0E` (니어블랙) | **정확히 일치** |
| 액센트 | `#D1FE17` (애시드 라임) 단 하나, "one accent, everywhere else restraint" | **정확히 일치** |

DESIGN.md §2 의 문장 자체가 군집 정의문과 거의 같다.

### 군집 #5 — "template chrome that appears whatever the subject"

원문이 열거한 여섯 가지 자국과 우리 r4:

| 원문의 자국 | r4 실측 | 판정 |
|---|---:|---|
| tracked-out ALL-CAPS eyebrow label above every heading | `text-transform:uppercase` 규칙 2 · 트래킹 선언 5 (RANGE·CONTROL·WORLDS·PRESETS…) | ❌ 해당 |
| meta strings joined with middle dots ('A · B · C') | 가운뎃점 **53개** | ❌ 해당 |
| labels built as 'WORD — fragment' with a spaced em dash | 스페이스 em dash **32개** | ❌ 해당 |
| tinted near-black (#0B0B0B, #111) standing in for black | `#0B0C0E` | ❌ 해당 |
| a monospace face for small data labels | Geist Mono 13px 라벨 | ❌ 해당 |
| a '→' appended to link and button text | 화살표 **10개** ("Start with one line →") | ❌ 해당 |

**여섯 중 여섯.** 우리는 이 군집을 하나도 빠짐없이 구현했다.

원문의 결정타: *"Where it leaves an axis free, don't spend that freedom on one of these defaults."*
브리프가 "AI 이미지 생성 제품, 다크 우선"만 줬고 나머지 축은 자유였는데, 우리는 그 자유를 전부 기본값에 썼다.

## 3. 왜 규칙으로는 잡히지 않았나

우리 게이트(A 색 · B 구도 · C 효과 · D 사용자 · E 자기 표절)는 **페이지 내부의 일관성**을 묻는다.
A2 는 "첫 뷰포트 액센트 ≤3", A3 는 "절제형/전면형 중 선언" — 라임 하나를 규율 있게 쓰면 통과한다.
**"그 선택이 애초에 기본값인가"를 묻는 항목이 없다.** E(자기 표절 시험)가 가장 가깝지만
"비슷한 브리프에도 같은 결과가 나오는가"를 묻지, "업계 전체의 AI 기본값과 같은가"를 묻지 않는다.

## 4. 처방 (r5)

1. **금지 목록을 브리프에 명문화한다.** 런마다 "이번에 절대 쓰지 않을 것 5줄"을 선언하고, 5대 군집 중
   우리가 흘러갈 것을 반드시 포함한다. → 게이트 신설 항목(F).
2. **팔레트를 갈아엎는다.** 니어블랙+애시드 라임을 버린다. 이미지 61장은 그대로 쓰되,
   지면 색·액센트·명도 구조를 다시 정한다(후보: 밝은 지면 + 이미지가 어두운 덩어리 / 2색 액센트 /
   무채색 없는 유채색 지면). 이미지 세트가 다크에 최적화돼 있으므로 **밝은 지면 전환은 실험으로 검증**한다.
3. **크롬 자국 여섯 개를 전부 제거한다.** ALL-CAPS 트래킹 eyebrow · 가운뎃점 메타 · 스페이스 em dash 라벨 ·
   니어블랙 · 소형 라벨 모노 · 버튼의 →. 대체안을 각각 정한다(라벨을 문장으로, 구분은 줄바꿈·괘선·색으로).
4. **구조 장치는 정보일 때만.** 번호(01/02/03)·eyebrow·구분선은 콘텐츠가 실제로 그 구조일 때만 쓴다.
5. **매크로구조를 이름으로 고른다.** 21종 중 하나를 지명하고 직전 런과 다른 축을 선언한다(LC-60 후보).

## 5. 한계

- 이 문서는 **원문 대조**다. "기본값이면 반드시 나쁘다"는 증명이 아니다 — 잘 쓴 다크+라임 사이트는 존재한다.
- 다만 우리 사례에서는 사용자가 r0 에서 이미 "브랜드가 밋밋하다"고 말했고, 이후 네 라운드 동안
  그 축만 손대지 않았다. **가설의 우선순위가 높다**는 뜻이다.
- 검증 방법: r5 에서 팔레트·크롬만 바꾼 판을 만들어 같은 이미지·같은 구조로 채점받는다(A/B).
