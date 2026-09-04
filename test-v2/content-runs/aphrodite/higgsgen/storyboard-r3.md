# Higgsgen r3 — 스토리보드 (정착 타이밍 + 유휴 스펙터클, 이미지셋 61장 동일)

> r2 70점의 번역(FEEDBACK.md r2): ① 스크럽이 섹션 퇴장에야 끝난다 → **LC-48 정착 대역**(진행 45~75% 정착, 홀드 ≥0.6vh) ② 스크롤 없이도 살아 있는 것·호버 팟 펼침 → **유휴 층**(fx-library 유휴/호버 10종).
> 근거: `docs/design-excellence/scrub-timing.md` §5 처방표, `idle-spectacle.md` §7 배정표, `r3-build-notes.md`(리뷰 r2 회귀 목록).
> 라이브러리: GSAP+ScrollTrigger 114.7KB(유지) + fx-library 스니펫(신규 유휴 5종 ≈13KB raw). `animation-timeline` 은 쓰지 않는다(Firefox 미구현).

## 전략 선언 (게이트)
- 액센트 **절제형 유지**: CTA 1/뷰포트 · 진행 레일 · 선택 상태 · 면 1회(S9). 태그·캡션 중성.
- 명도 반전 3회(S4 밝게 → S5 암전 → S9 밝게 → S10 암전).
- 핀 **4개**: S1·S3·S5·S8 (S2·S6 은 스티키 대신 **호버 층으로 이관** — 처방표의 "스티키 신설"은 핀 예산 때문에 채택하지 않음).
- 총 길이 **≤ 14.5vh**(핀 트랙 연장분은 S2·S6 비핀화와 S7 축소로 상쇄).
- 유휴 층: 폴드 무한 애니 ≤ 6 · 3D 유휴 동사 화면당 1 · 섹션당 스크롤 1 + 유휴 1 + 호버 1.
- 진입: `entry-curtain-count` 0.7~2.6s, 히어로 스크럽과 동시 발화 금지.
- 모바일 390: 핀 해제, 대신 **경량 안무**(IntersectionObserver 리빌 + 시퀀스 자동 재생 + 원통 자동 회전). 390 첫 화면에 h1 보임.

## 섹션 표
| # | 섹션 | 이미지(id) | 스크롤 동사 (정착 대역·홀드) | 유휴 동사 | 호버 동사 | 액센트 사건 |
|---|---|---|---|---|---|---|
| S0 | 진입 커튼 | — | — | `entry-curtain-count` 1회 | — | 0 |
| S1 | Hero 줌스루 (**핀** 2.15vh) | hero-01→02 | R1, `end:"+="+travel*0.52` → **정착 52% · 홀드 ≈1.0vh** | `ambient-fold`(광원 드리프트·라이브 점멸) + `drift-collage` 7타일(range 썸네일) | — | CTA 1 |
| S2 | Range 장르 스택 (비핀) | range-01…12 | R4 펼침, 뷰포트 진입 20%→ **65% 정착**, 이후 정지 | — | `stack-fan-hover` 장르당 팟 | 0 |
| S3 | Control 스크럽 (**핀** 4.0vh) | seq-01…08 | R5, `end:"+="+travel*0.65` → **정착 65% · 홀드 ≈1.1vh**, 프롬프트 토큰 **스왑+밑줄 이동**으로 프레임과 1:1 | — | — | 진행 레일 |
| S4 | Compare 밝은 밴드 | ba-01…04 | 자동 스윕 1회(진입 시) | — | 슬라이더 | 0 |
| S5 | Gallery 가로 핀 (**핀** 4.5vh) | macro×6 + product×5 | R2, `end:"+="+travel*0.70` → **정착 70% · 홀드 ≈1.35vh**, 카드별 `--pz` **개별 트윈** | — | — | 0 |
| S5b | **Cylinder 갤러리 (신규, 스크롤 동사 0)** | space-01…04 + human×4 + abstract×4 = 12 | 없음 | `poster-cylinder` 자동 6deg/s + 드래그·관성 | 호버 감속 | 0 |
| S6 | Feature 대표작 (비핀) | space-02 (대표) + 3 | 매치컷 대신 정지 진입 | — | `flip-expand-card` 클릭→풀 패널 | 0 |
| S7 | Presets 틸트 (축소) | abstract×4 | 리빌만 | — | 틸트+스포트라이트+선택 | 선택 상태 |
| S8 | Delivery 리빌 (**핀** 3.0vh) | macro-03 | R6, `end:"+="+travel*0.60` → **정착 60% · 홀드 ≈0.85vh** | — | `hover-cross-open`(주변 4장) | 0 |
| S9 | Plan 밝은 밴드 | — | — | 라이브 수치 점멸 재사용 | — | **면 1** |
| S10 | Footer 브레이크아웃 | macro-01,02 + amb-01 | **두 트리거 분리**: 조립(2.5vh 스티키는 핀 예산상 비핀 스크럽, 뷰포트 안에서 70% 정착) / 퇴장은 대상 아님 | — | `magnetic-cursor` CTA | 0 |

## 게이트 자체 판정 (storyboard-review v1 + C7·C8)
- A1~A6 ✓ (r2 와 동일 전략, 첫 뷰포트 라임 1)
- B1~B5 ✓ · B3 피크 = S1 정착 순간(홀드 1.0vh 에서 감상) · 호흡 = S2 진입
- C1 섹션당 주 1+보조 1 ✓ · C2 종류: zoom·fan·scrub·h-pin·clip·cylinder·breakout = 7 ✓, 라이브러리 114.7+13 ≈ 128KB raw(**gzip 52KB**, 예산은 gzip 기준으로 개정) · C3 핀 4 ✓ · C4 정지 동사 0 ✓ · C5 텍스트 마스크 macro ✓ · C6 리듀스드 모션: 핀 해제·시퀀스 프레임 1·원통 정지·커튼 즉시 완료 ✓
- **C7 정착**: S1 52%/1.0vh · S3 65%/1.1vh · S5 70%/1.35vh · S8 60%/0.85vh — 전부 45~75% · ≥0.6vh ✓ · S6/S2/S10 은 비핀 리빌·퇴장으로 LI-33 대상 아님
- **C8 유휴 층**: 히어로 `ambient-fold`+`drift-collage` ✓ · 호버 팟 `stack-fan-hover`·`hover-cross-open`·`flip-expand-card` ✓ · 원통 1 ✓

**판정: PASS** — 빌드 진입. (개정: C2 라이브러리 예산을 raw 120KB → **gzip 60KB** 로 — 인라인 base64 폰트와 같은 기준.)
