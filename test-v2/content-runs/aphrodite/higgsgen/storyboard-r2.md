# Higgsgen r2 — 스토리보드 (효과 집중, 이미지셋 61장 동일)

> r1 60점의 번역(FEEDBACK.md): 이미지가 **행동**해야 하고(줌·회전·가로 이동·펼침), 트렌드 효과는 **라이브러리에서** 가져오며, 액센트는 **사건**이 된다.
> 라이브러리: GSAP 3.15 + ScrollTrigger(114.7KB, `fx-library/scroll-gsap/lib`, 라이선스 LICENSES.md) 인라인. Lenis 는 off(예산).
> 효과 인벤토리: `fx-library/scroll-gsap/recipes/01~08` + `fx-library/{aurora-mesh,border-beam,light-sweep-sheen,spotlight-pointer,film-grain,glass-panel,mask-wipe-reveal,pixel-dissolve,split-text-rise,text-scramble,gradient-text-shift,tilt-3d,sticky-card-stack,magnetic-cursor}`.

## 전략 선언 (게이트 A3)
- **액센트 절제형.** 라임 #D1FE17 은 ① 주 CTA(뷰포트당 1) ② 진행 레일/프레임 눈금 ③ 선택 상태(aria-pressed) ④ **면 1회 = S9 밝은 밴드의 CTA 카드**. 섹션 태그·캡션·워드마크 "GEN" 은 중성(ink/mute)으로 되돌린다.
- 명도 반전 **3회**: S4(밝게) → S5(암전) → S9(밝게) → S10(암전).
- 핀 **4개**: S1·S3·S5·S8. 나머지는 비핀.
- 효과 종류 **7**: zoom-through · scrub-sequence · horizontal-pin · scale-clip-reveal · card-fan-3d · match-cut · film-grain(전역 재질). 보조: split-text-rise(헤드라인 1회), light-sweep-sheen(CTA), spotlight-pointer(S7), mask-wipe-reveal(S2 카드 진입).

## 섹션 표
| # | 섹션 | 이미지(id) | **이미지의 동사** | 주효과 | 보조 | 텍스트↔이미지 | 여백 방향 | 잉크 목표 | 액센트 사건 |
|---|---|---|---|---|---|---|---|---|---|
| S1 | Hero — 줌스루 (**핀**) | hero-01 → hero-02 | **줌스루**: 썸네일(28%)이 스크롤로 풀블리드(100%)까지 커지고 hero-02 로 매치컷 | recipe 01 | split-text-rise(h1 1회) · film-grain | 텍스트가 이미지 **앞**, 줌 완료 시 텍스트 퇴장 | 좌(헤드라인) | 70% | CTA 1 |
| S2 | Range — 카드 팬 | range-01…12 | **회전**: 12장이 3D 팬으로 펼쳐지며 진입, 스크롤로 부채 각도 변화 | recipe 03 | mask-wipe-reveal(진입) | 나란히(캡션 아래) | 상 | 60% | 0 |
| S3 | Control — 스크럽 (**핀**) | seq-01…08 | **스크럽**: 8프레임을 스크롤이 끌고, 프롬프트 토큰이 프레임 변화와 **점등**으로 결합 | recipe 05 | text-scramble(캡션) | 좌 텍스트 / 우 프레임 | 우 | 55% | 진행 레일 |
| S4 | Compare — 밝은 밴드 | ba-01…04 (a/b) | **와이프**: 4쌍 슬라이더, 스크롤 진입 시 자동 1회 스윕 후 사용자 조작 | (r1 유지) | light-sweep-sheen(핸들) | 관통(라벨이 이미지 위 절반) | 하 | 60% | 0 |
| S5 | Gallery — 가로 핀 (**핀**) | macro-01…06 + product-01…05 | **가로 이동**: 세로 스크롤이 가로 트랙을 끌고, 카드 크기가 원근으로 변주 | recipe 02 | film-grain | 나란히 | 좌우 | 65% | 0 |
| S6 | Space — 매치컷 | space-01…04 | **컷 연결**: 앞 섹션 마지막 프레임을 물려받아 다음 이미지로 교차 | recipe 08 | — | 겹침(캡션 12%) | 상 | 50% | 0 |
| S7 | Presets — 틸트 | abstract-01…06 + human-01,02 | **기울기**: 커서 추종 틸트 + 스포트라이트, 선택 상태 | tilt-3d | spotlight-pointer · border-beam(선택 카드 1) | 나란히 | 하 | 55% | 선택 상태(aria-pressed) |
| S8 | Delivery — 스케일+클립 (**핀**) | macro-03 (고해상) | **열림**: 원형 클립이 커지며 동시에 스케일 1.15→1.0 | recipe 06 | film-grain(걷힘) | 관통(헤드라인이 클립 뒤에서 앞으로) | 상 | 60% | 0 |
| S9 | Plan — 밝은 밴드 | 이미지 0 | 휴지 | — | **라임 면 1회**(CTA 카드) | 텍스트만 | 좌우 | 30% | **면 1** |
| S10 | Footer — 텍스트 브레이크아웃 | macro-01,02 (텍스트 마스크) + amb-01 (배경) | **관통**: 헤드라인 글자 속에 이미지, 스크롤로 글자 밖으로 흘러나옴 | recipe 07 | gradient-text-shift(워드마크) | 관통 | 하 | 55% | 0 |

## 게이트 자체 판정 (storyboard-review v1)
- A1 사건 목록 4개 ✓ · A2 첫 뷰포트 액센트 **1**(CTA) ✓ · A3 절제형 선언, 면 1회(S9) ✓ · A4 태그·캡션 중성 ✓ · A5 반전 3회 ✓ · A6 중성 3단계 ✓
- B1 섹션마다 관계 명시 ✓ · B2 히어로 헤드라인 좌 상단 1/3, 피사체 우 ✓ · B3 피크 = S1 줌스루 완료 지점 1개, 직전 호흡 = (없음 — 히어로가 피크라 S2 가 호흡: 카드 팬 진입을 느리게) ✓ · B4 잉크 70/60/55/60/65/50/55/60/30/55 — 3연속 동일 없음 ✓ · B5 여백 방향 전 섹션 다름 ✓
- C1 주 1 + 보조 ≤1 ✓ · C2 종류 7 ≤ 7, 라이브러리 114.7KB ≤ 120 ✓ · C3 핀 4 ✓ · C4 정지 이미지 = S9 만(0장) → 정지 비율 0% ✓ · C5 텍스트 마스크(S10)는 amb 가 near-dark — **R-A 위반 위험 → macro-01/02 로 교체** ✓(수정) · C6 리듀스드 모션: 핀 해제·정지 프레임 1·팬 펼친 상태 고정 ✓

**판정: PASS** — 빌드 진입.
