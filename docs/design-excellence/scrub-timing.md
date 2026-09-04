# 스크럽 정착 타이밍 실측 — 힉스젠 r2 결함과 레퍼런스 기준

날짜 2026-09-04 · 도구 `docs/research/scrub-timing-probe.mjs` · 뷰포트 1440×900(dpr 1, headless chromium)

## 0. 질문

r2(70/100) 피드백 원문:

> 뭔가 스크롤이 끝나는 시점에야 결과물 애니메이션이 끝나는 포인트들이 존재하는 거 같아. 그래서 펼쳐지는데,
> 다 펼쳐지는 시점이 스크롤이 해당 섹션을 아예 지나가는 시점이라서 아쉬운 포인트들이 있어.

이걸 재는 수로 바꾸면 **"스크럽 progress 가 1 에 도달하는 스크롤 위치"와 "섹션이 뷰포트를 빠져나가는
스크롤 위치"의 간격**이다. 간격이 0 이면 결과 상태를 볼 시간이 0 이다.

## 1. 측정 정의 (어떤 페이지에서도 같은 수가 나오도록)

섹션(트리거 엘리먼트)의 문서상 상단 `secTop`, 높이 `secH`, 뷰포트 높이 `vh` 에 대해

| 기호 | 정의 | 뜻 |
|---|---|---|
| `enter` | `max(0, secTop − vh)` | 섹션 상단이 뷰포트 하단에 닿는 스크롤 위치 |
| `exit` | `secTop + secH` | 섹션 하단이 뷰포트 **상단**을 지나는 스크롤 위치 (완전 퇴장) |
| `settle` | 스크럽 트리거의 `end`(GSAP) 또는 마지막 변화 관측 위치(샘플 모드) | 애니메이션이 최종 상태에 도달하는 스크롤 위치 |
| `settle%` | `(settle − enter) / (exit − enter) × 100` | **섹션 진행의 몇 %에서 정착하는가** |
| `leadVh` | `(exit − settle) / vh` | 정착 후 남는 감상 구간(vh) |
| `pinLeadVh` | `(secTop + secH − vh − settle) / vh` | 스티키/핀이 **풀리기 전에** 남는 감상 구간(vh) |

`pinLeadVh` 가 핵심이다. 스티키 트랙에서 `leadVh` 가 1 이어도 그 1vh 동안 무대는 이미 위로
쓸려 나가고 있다 — 정착 상태를 **정지된 화면으로** 보는 시간은 `pinLeadVh` 뿐이다.

판정: `leadVh < 0.5` 또는 `pinLeadVh < 0.15` → **DEFECT** · `leadVh < 1.0` → TIGHT · 그 외 OK.

## 2. 힉스젠 r2 실측 — 18/18 트리거 결함

`node docs/research/scrub-timing-probe.mjs test-v2/content-runs/aphrodite/higgsgen/render-r2.html`
(mode=gsap, vh=900, page=15.65vh, ScrollTrigger 22개 중 스크럽/핀 18개, CSS `animation-timeline` 0개)

같은 창(trigger+start+end)을 공유하는 트리거는 한 줄로 접었다.

| n× | trigger | start | end | scrub | settle% | leadVh | **pinLeadVh** | secTop | secH | 판정 |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `#s1` zoom-through | 0 | 1035 | 0.6 | 53.5 | 1.0 | **0.0** | 0 | 1935 | DEFECT |
| 1 | `#s2` card-fan | 1107 | 2506 | 0.7 | 79.6 | 0.4 | **−0.6** | 1935 | 949 | DEFECT |
| 1 | `#s3` scrub-sequence | 2884 | 4279 | 0.35 | 71.8 | 1.0 | **0.0** | 2884 | 2295 | DEFECT |
| 13 | `#s5` horizontal-pin | 6578 | 7748 | 0.5/0.7 | 69.7 | 1.0 | **0.0** | 6578 | 2070 | DEFECT |
| 1 | `#s6` match-cut | 7748 | 9548 | 0.5 | 100.0 | 0.0 | **−1.0** | 8648 | 900 | DEFECT |
| 1 | `#s8` scale-clip | 10596 | 11226 | 0.6 | 63.0 | 1.0 | **0.0** | 10596 | 1530 | DEFECT |
| 1 | `.stage--out` breakout | 11843 | 12743 | 0.6 | 50.0 | 1.0 | **0.0** | 12743 | 900 | DEFECT |

**단일 원인이다.** 스티키 트랙 섹션 5곳이 전부 `start: "top top", end: "bottom bottom"` 이다.
`bottom bottom` 은 정의상 "섹션 하단이 뷰포트 하단에 닿는 위치" = `secTop + secH − vh` =
**스티키가 풀리는 바로 그 지점**이다. 그래서 `pinLeadVh` 가 수학적으로 정확히 0 이 된다 —
우연이 아니라 이 start/end 조합의 필연이다.

두 개의 예외도 같은 병이다.
- `#s2` 는 `end: "bottom 42%"` 로 섹션 하단이 뷰포트 42% 에 올 때 끝나는데, 스티키가 아니라
  일반 흐름 섹션이라 그 시점엔 이미 섹션의 위쪽 60%가 화면 밖이다 → `pinLeadVh −0.6`.
- `#s6` 은 `start: "top bottom", end: "bottom top"` — 진입부터 완전 퇴장까지 전 구간을 스크럽에
  쓴다. 정착 = 퇴장(`settle% 100`). 가장 나쁜 값이며 매치컷의 "B 가 태어나는 순간"을
  사용자는 화면 밖에서 맞는다.

`#s1`·`.stage--out` 의 `settle% ≈ 50` 은 좋아 보이지만 착시다. 두 섹션은 앞뒤로 1vh 의
진입/퇴장 여유가 있어 분모가 커졌을 뿐, 무대가 정지해 있는 동안의 여유(`pinLeadVh`)는 0 이다.
**`settle%` 단독으로 판정하면 안 되고 `pinLeadVh` 와 함께 봐야 한다**는 것이 이 실측의 부산물이다.

## 3. 레퍼런스 실측

같은 도구·같은 좌표계로 잰다. 계측 신뢰도는 세 등급이다.

- **gsap** — `ScrollTrigger.getAll()` 을 직접 읽는다. 정확하다.
- **sampled** — GSAP 이 없어 400px 간격 스냅샷으로 "마지막 변화 위치"를 정착점으로 본다.
  **늦게 나오는 편향**이 있다(지연 로드 이미지 교체, 시차 레이어, 스티키 리플로도 변화로 셈).
- **확인 못 함** — Lenis/Locomotive/WebGL 가상 스크롤이라 `window.scrollTo` 가 먹지 않는다.
  문서 높이가 1vh 로 보고되어 섹션 창 자체가 없다. 이 도구의 사거리 밖이다.

### 3.1 사이트별

| 사이트 | 모드 | 창 | settle% (중앙값) | pinLeadVh | 메모 |
|---|---|---|---|---|---|
| gsap.com | gsap | 2 | — | 0 / +1.7 | 홈 스크럽 타임라인이 트리거 3000px 중 **18.8%** 에서 트윈 종료 → 나머지 81%가 정지 감상. 단 트리거 엘리먼트가 스티키 트랙의 **자식**이라 섹션 창 계산은 신뢰 못 함(도구 한계) |
| dennissnellenberg.com | gsap | 4 | 74.5 | +0.2 / 0.0 / −1.0 ×2 | 38.6%(푸터, **+0.2 홀드**)·48.9%(푸터, 0.0)·100% ×2(히어로 **퇴장** 트윈 — 정착점이 없는 것이 정상) |
| linear.app | sampled | 2 | 71.3 | 0.0 / −0.8 | 30.9% / 91.9% |
| locomotive.ca | sampled | 1 | 47.8 | **+0.5** | 측정된 외부 사이트 중 홀드가 가장 길다 |
| higgsfield.ai | sampled | 1 | 88.1 | −0.9 | 경쟁사. 정착이 퇴장과 겹친다 |
| cuberto.com | sampled | 9 | 89.2 | −0.6 ~ −1.0 | 9개 창 전부 75~99%. 다만 sampled 편향이 크다 |
| apple.com/airpods-pro, /macbook-pro | sampled | — | — | — | **확인 못 함**. GSAP 없음(자체 스크롤 엔진), 샘플 모드에서 settle%>100 의 잡음만 나와 폐기 |
| runwayml.com | sampled | 0 | — | — | 창 안에서 유의미한 변화 미검출 — 확인 못 함 |
| lusion.co · basement.studio · activetheory.net · immersive-g.com · krea.ai · igloo.inc | 가상 스크롤 | — | — | — | **확인 못 함**(문서 높이 = 1vh) |

### 3.2 분포와 결론

측정 가능한 레퍼런스 창 17개의 `settle%` 분포:

`30.9 · 38.6 · 47.8 · 48.9 · 75.3 · 77.2 · 78.4 · 85.8 · 88.1 · 89.2 · 91.9 · 93.6 · 95.8 · 98.4 · 98.9 · 100 · 100`
→ **중앙값 88.1%**, GSAP 정밀 측정만 보면 74.5%.

**이 중앙값을 목표로 삼으면 안 된다.** 그 값은 (a) sampled 모드의 늦은 편향과 (b) 정착점이 애초에 없는
퇴장·시차 연출이 함께 섞인 결과다. 규칙을 뽑을 수 있는 것은 **홀드가 양수였던 창들**뿐이다:

| 창 | settle% | pinLeadVh |
|---|---|---|
| locomotive.ca `c-home-…` | 47.8 | **+0.5** |
| dennissnellenberg 푸터 | 38.6 | **+0.2** |
| gsap.com 홈(트리거 범위 기준 18.8%) | — | 트리거 범위의 81%가 홀드 |

즉 **감상 구간이 실제로 존재하는 연출은 섹션 진행의 40~50%, 트리거 범위로는 20~65% 에서 정착했다.**
반대로 75% 이상에서 정착한 창은 전부 홀드가 음수였다(cuberto 9/9, higgsfield 1/1, linear 1/2).
정착 후 감상 구간은 측정된 최선이 **0.5vh**, 나머지는 0 이하다 — 이 축에서 잘하는 사이트가 많지 않다는
것 자체가 결과다(그래서 이 규칙은 차별점이 된다).

## 4. 규칙 — LC-48 / LI-33

`docs/design-excellence/landing-craft-codex.md` §7 에 **LC-48 정착은 섹션 안에서 일어난다**로 넣었다. 요지:

1. **정착 후 홀드 `pinLeadVh ≥ 0.6`** — 무대가 화면을 채운 채로 최소 0.6 뷰포트만큼 더 스크롤 가능.
2. **`settle%` 45~75%** (섹션 창 기준).
3. **핀은 길게, 트윈은 일찍** — 타임라인이 트리거 범위의 60~70% 에서 끝나게 한다(gsap.com 은 18.8%).
4. **스티키 트랙에 `end: "bottom bottom"` 금지** — 홀드가 수학적으로 0 이 되는 유일한 원인.
   스티키 트랙 이동 거리는 최소 2.0vh(그래야 30% 가 0.6vh 를 넘는다).
5. **퇴장·시차 연출은 대상 아님** — 그래서 검사기는 **창의 과반**이 결함일 때만 FAIL 한다.

`test-v2/tools/landing-integrity.mjs` 의 **LI-33**:

- ScrollTrigger 있음 → 창(trigger+start+end)별로 접어서 `pinLeadVh < 0.6 || leadVh < 0.5` 를 결함으로
  세고, 결함이 **과반이면 FAIL**, 하나라도 있으면 WARN, 없으면 PASS.
  정착점은 `t.end` 가 아니라 **타임라인 마지막 트윈의 종료 시각 비율**로 계산한다 — 그래야
  "핀은 길게, 트윈은 일찍"이라는 우리 권고안이 PASS 로 읽힌다.
- ScrollTrigger 없음 + CSS `animation-timeline` 있음 → `animation-range` 종점이 `cover/exit 100%` 인 것을
  센다. **WARN 까지만** 한다: view() 의 range 는 subject 기준이라 섹션 좌표로 환산할 수 없고,
  종점이 `cover 100%` 여도 시차 레이어면 정상이기 때문이다.
  (CSSOM 이 선언을 못 주는 엔진을 대비해 `<style>` 원문 폴백을 둔다.)
- 둘 다 없음 → PASS(해당 없음).

**회귀 확인** — `ninefold/render.html`, `higgsgen/render.html`(r1), `higgsgen/render-r2.html` 3개에서
LI-1…LI-32 의 판정이 **한 글자도 바뀌지 않았다**(`docs/research/probe-out/li-before.log` vs `li-final.log`).
새로 붙은 LI-33 결과는:

| 파일 | LI-33 | 파일 전체 |
|---|---|---|
| ninefold r1 | ok — CSS view() 1개, 늦은 종점 0개 | FAIL 0 · WARN 0 (변화 없음) |
| higgsgen r1 | warn — CSS view() 22개 중 `cover 0% cover 100%` 3개(전부 시차 `par-a/b/c`) | FAIL 0 · WARN 1 (fail 수 불변) |
| higgsgen r2 | **FAIL** — 스크럽 창 7개 중 7개 결함(100%), 최악 `#s6` settle 100% · 홀드 −1.0vh | FAIL 1 |

## 5. r2 → r3 수정 지침 (빌더용)

전부 `vh = 900` 기준. **r2 를 직접 고치지 않았다** — 아래는 r3 빌드 지침이다.

| 트리거 | 지금 | 문제 | r3 처방 | 처방 후 예상 |
|---|---|---|---|---|
| `#s1` zoom-through | 트랙 2.15vh(이동 1.15vh), `start "top top" / end "bottom bottom"` | 홀드 0.0vh | 트랙 유지, **`end: () => "+=" + Math.round((s1.offsetHeight - innerHeight) * 0.52)`** (≈540px). 열린 프레임이 정지한 채 0.55vh 남는다. 여유를 더 주려면 트랙을 3.0vh 로 | settle ≈ 47% · 홀드 0.55~0.7vh |
| `#s2` card-fan | 흐름 섹션 1.05vh, `end "bottom 42%"` | 스티키가 아니라 **붙잡을 무대 자체가 없다**. 홀드 −0.6vh | 섹션을 **스티키 트랙 2.6vh + 100vh 스테이지**로 바꾸고 `start "top top"`, `end: () => "+=" + (travel * 0.6)` (travel 1.6vh → end 0.96vh) | settle ≈ 55% · 홀드 0.64vh |
| `#s3` scrub-sequence (8프레임) | 트랙 2.55vh(이동 1.55vh), `bottom bottom` | 홀드 0.0vh. 8번째 프레임이 화면을 나가며 도착 | 트랙을 **4.0vh** 로 늘리고 `end: "+=" + (travel * 0.65)` (이동 3.1vh → 스크럽 2.0vh, 프레임당 0.25vh). 마지막 프레임 도착 후 1.05vh 정지 | settle ≈ 62% · 홀드 1.05vh |
| `#s5` horizontal-pin (12장) | 트랙 2.3vh(이동 1.3vh), `bottom bottom`, 트윈 13개 동일 창 | 홀드 0.0vh. 마지막 카드가 도착하는 순간 트랙이 풀린다 | 트랙을 **4.5vh** 로. `end: "+=" + (travel * 0.70)`. 진행 바는 `min(1, s.progress / 0.70)` 로 리맵해 **정착 때 100%** 가 되게 한다 | settle ≈ 63% · 홀드 1.05vh |
| `#s6` match-cut | 1vh 섹션, `start "top bottom" / end "bottom top"` | **settle 100% · 홀드 −1.0vh**. B 프레임이 태어나는 순간이 화면 밖 | 스티키 트랙 **2.8vh + 100vh 스테이지**. `start "top top"`, `end: "+=" + (travel * 0.60)`. 컷 순간(`.set("#cutB"…)`)을 스크럽의 **0.45~0.5** 에 두어 컷 후 0.7vh 를 정지 상태로 본다 | settle ≈ 55% · 홀드 0.72vh |
| `#s8` scale-clip-reveal | 트랙 1.7vh(이동 **0.7vh**), `bottom bottom` | 홀드 0.0vh. 이동 거리가 짧아 "일찍 끝내기"만으로는 불가능 | 트랙을 **3.0vh** 로 늘린 뒤 `end: "+=" + (travel * 0.60)` (이동 2.1vh → 스크럽 1.26vh) | settle ≈ 58% · 홀드 0.84vh |
| `.stage--out` text-breakout | 1vh, `top bottom → bottom top`, 마지막이 `scale 4.2 / opacity 0` | 조립(글자 채움)과 **퇴장**(4.2배 확대)이 한 트리거에 섞여 감상 구간이 없다 | **두 트리거로 분리**: ① 조립 — 스티키 2.5vh 트랙, `end: "+=" + (travel*0.6)`, 글자 채움 완료 후 0.6vh 정지. ② 퇴장 — 별도 트리거 `start "bottom 90%" / end "bottom top"` 에 `scale 4.2` 만. 퇴장 트리거는 LC-48 대상이 아니다 | 조립 settle ≈ 58% · 홀드 0.6vh |

### 5.1 공통 처방

- **`end: "bottom bottom"` 을 이 파일에서 전부 없앤다.** 이 한 줄이 7개 창 중 5개의 단일 원인이었다.
  일찍 끝내는 문법은 `end: () => "+=" + Math.round(travel * k)` (k = 0.52~0.70) 이다.
  `end: "bottom bottom-=N"` 은 **반대 방향**(더 늦게 끝남)이니 쓰지 않는다.
- **이징으로 착지시킨다(LC-41).** 스크럽 전체는 `ease: "none"` 을 유지하되, 마지막 조립 트윈 하나에만
  `ease: "power2.out"` 또는 `linear(0,.6,1.02,1)` 오버슈트를 준다. 정착이 "멈춤"이 아니라 "도착"으로 읽힌다.
- **`snap` 은 시퀀스형에만.** `#s3`(8프레임)·`#s5`(카드)에 한해
  `snap: { snapTo: (v) => Math.min(1, Math.round(v / step) * step), duration: { min: .1, max: .3 }, ease: "power1.inOut", delay: .06 }`.
  `snapTo: 1` 은 쓰지 않는다 — 홀드 구간으로 튀어 감상 구간을 되레 없앤다.
- **예산 충돌을 확인한다.** 위 처방은 페이지를 대략 **+7~9vh** 늘린다(15.65vh → 23~25vh).
  LI-1 은 핀 스테이지가 있으면 면제되지만 **LI-2(비히어로 섹션 중앙값 0.8~2.0vh)** 가 깨진다.
  → 모든 트랙을 늘리지 말고 `#s5`·`#s8`·`#s2`·`#s6` 넷만 늘리고, `#s1`·`#s3` 는 길이를 그대로 둔 채
  **끝을 당기기만** 한다. 빌드 후 `node test-v2/tools/landing-integrity.mjs <render-r3.html>` 로
  LI-1·LI-2·LI-33 을 함께 통과시킨다.
- **유휴 층은 이 규칙이 해결하지 않는다.** r2 피드백 2번(원통 캐러셀·호버 팟 펼침)은 별도 규칙이다.
  LC-48 은 "정착 상태를 볼 시간"만 보장한다.

### 5.2 검증 명령

```
node docs/research/scrub-timing-probe.mjs <render-r3.html>      # 창별 settle%/holdVh 표
node test-v2/tools/landing-integrity.mjs <render-r3.html>       # LI-33 포함 전 항목
```
합격선: LI-33 PASS(결함 창 0), 모든 창 `pinLeadVh ≥ 0.6`, `settle%` 45~75.
