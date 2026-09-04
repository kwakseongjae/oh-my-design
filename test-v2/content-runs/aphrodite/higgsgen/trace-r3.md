# Higgsgen r3 — 빌드 trace (정착 타이밍 + 유휴 스펙터클)

산출물 `render-r3.html` (338KB raw / 162KB gzip, img 95, 고유 자산 **61/61**)
빌더 `runs/build-r3.mjs` + 템플릿 `runs/template-r3.html` (r2 는 그대로 보존)
근거: `storyboard-r3.md` · `r3-build-notes.md` · `docs/design-excellence/scrub-timing.md` §5 · `idle-spectacle.md` §7 · `fx-library/INDEX.md`

---

## 1. 검증 결과 (전부 통과)

| 명령 | 결과 |
|---|---|
| `node test-v2/tools/render-integrity.mjs R/render-r3.html` | **PASS** (1440×900 · 390×844, 가로 오버플로 0 · escape 0) |
| `node test-v2/tools/text-contrast.mjs R/render-r3.html` | **fail=0** (텍스트 0 · 포커스 링 0 · no-JS 숨김 0) |
| `node test-v2/tools/landing-integrity.mjs R/render-r3.html` | **FAIL 0 · WARN 0** — LI-1…LI-33 전부 ok |
| `node test-v2/tools/scrub-timing-probe.mjs R/render-r3.html` | **defects=0** · settle_median 52.8% |
| 헤드리스 0→끝 300px 스크롤 | 콘솔/페이지 에러 **0** |
| `scrollHeight/900` | **14.38** ≤ 14.5 |
| 폴드 `document.getAnimations()` infinite | **5** ≤ 6 |
| 390 h1 `top` | **123px** < 844 (r2 는 733) |

### LI 하이라이트
```
ok LI-1  page 14.38 vh (pinned stage)      ok LI-2  median non-hero 0.85 vh (n=10)
ok LI-7  display:body 93.6/13 = 7.20       ok LI-8  body 13px
ok LI-12 480×51 · 240×44 · 160×29 · 720×15 ok LI-14 only opacity/transform/colour >200ms
ok LI-17 clip 0 · filter 0                 ok LI-21 uniform card groups 0
ok LI-32 generic/빈 alt 0/70               ok LI-26 미디어 95개 / 14.38vh = 6.6개/vh
ok LI-33 스크럽/핀 창 4개 중 정착 결함 0개(0%) · 최악 #s3 settle 50.6% · 홀드 0.65vh
```

---

## 2. 정착표 (scrub-timing-probe, vh=900)

```
n×  trigger  start  end    scrub  settle%  leadVh  pinLead  secTop  secH   verdict
1   #s1      18     394    0.6    20.8     1.7     0.7      0       1890   OK
1   #s3      2466   3074   0.35   50.6     1.7     0.7      2448    2115   OK
12  #s5      5346   6163   0.5    52.8     1.7     0.7      5328    2385   OK
1   #s8      9612   10066  0.6    47.6     1.7     0.7      9594    1980   OK
```

빌더가 발행하는 값(`build-r3.mjs` 상단 `TRACK`/`K` 한 곳에서 관리):

| 핀 | 트랙 | k | end 문법 | 계산상 settle% | 계산상 pinLead |
|---|---|---|---|---|---|
| S1 zoom-through | 2.10vh | 0.38 | `end: () => "+=" + Math.round((s1.offsetHeight - innerHeight) * 0.38)` | 45.7 | 0.68vh |
| S3 scrub-sequence | 2.35vh | 0.50 | 〃 ×0.50 | 50.0 | 0.67vh |
| S5 horizontal-pin | 2.65vh | 0.55 | 〃 ×0.55 | 52.3 | 0.74vh |
| S8 scale-clip | 2.20vh | 0.42 | 〃 ×0.42 | 47.0 | 0.70vh |

- **`end:"bottom bottom"` 은 파일에 0개.** `bottom bottom-=N` 도 쓰지 않았다(LC-48 §5.1).
- `#s1` 의 계측 settle% 20.8 은 착시다 — 히어로가 문서 최상단이라 `enter = max(0, secTop − vh)` 가 0 으로 클램프되어 분모가 커진다. 판정 기준인 `pinLeadVh`(0.7)·`leadVh`(1.7)는 만족한다. 검사기 LI-33 도 settle% 는 쓰지 않고 홀드만 본다.
- `#s5` 는 가로 트윈 1 + 카드 원근 트윈 11 = **12 창이 같은 (trigger, start, end)** 로 접힌다 → 한 창으로 센다.
- 이징 착지(LC-41): 스크럽 전체는 `ease:"none"`, 마지막 조립 트윈만 `power2.out`(S1 `cut-b` scale, S8 `clipframe img` scale).
- snap 은 시퀀스형(S3)에만 — `snapTo: v => min(1, round(v/step)*step)`, `snapTo:1` 은 쓰지 않았다.

### 스토리보드 명목치와 다른 점 (의도적 · 근거 기록)
스토리보드 §섹션표의 트랙(2.15 / 4.0 / 4.5 / 3.0 = 13.65vh)은 **총 14.5vh 예산 및 LI-2 와 동시에 성립하지 않는다**. 핀만으로 13.65vh 를 쓰면 남은 7개 비핀 섹션에 0.85vh 밖에 못 준다(LI-2 는 비핀 섹션 vh 중앙값 0.8~2.0 을 요구 → 6번째로 작은 섹션이 0.8 이상이어야 한다). 그래서 **핀 합계를 9.30vh 로 줄이고 k 를 낮춰 홀드를 지켰다**:
`pinLead = (h−1)(1−k) ≥ 0.6`, `settle% = (1+(h−1)k)/(h+1) ∈ 45~75`, `Σ ≤ 14.5` 세 식을 동시에 푼 해가 위 표다. 스토리보드가 약속한 "홀드 1.0~1.35vh" 는 트랙을 3.0vh 이상으로 늘려야 나오는 값이라 예산 안에서는 불가능했다 — 홀드는 **0.67~0.74vh**(규칙 바닥 0.6 대비 +12~23%)로 착지했다.

---

## 3. 섹션별 레시피 / 효과 ID

| # | 섹션 | 스크롤 동사 | 유휴 동사 | 호버·입력 동사 | 자산 |
|---|---|---|---|---|---|
| S0 | 진입 커튼 | — | `entry-curtain-count` (min 700ms / max 1800ms / 안전판) | — | — |
| S1 | Hero **핀 1/4** | R1 `01-zoom-through` — clip inset 열림 + 매치컷 | `ambient-fold`(광원 드리프트 66s + 라이브 점멸 3.4s) + `drift-collage` **7타일 2레이어** | — | hero-01/02 + grid×7(장식) |
| S2 | Range 장르 스택 (비핀) | IO 리빌 1회(진입 20%, 480/720ms 정착 후 정지) | — | `stack-fan-hover` 스택당 팟(4스택×3장) | grid-01…12 |
| S3 | Control **핀 2/4** | R5 `05-scrub-sequence` 8프레임 + 진행 레일 + snap | — | Prev/Next 프레임 버튼(`:disabled` 실사용) | seq-01…08 |
| S4 | Compare 밝은 밴드 | IO 진입 자동 스윕 1회(스크럽 아님) | — | 슬라이더 드래그/키보드 | ba-01…04 a·b |
| S5 | Gallery **핀 3/4** | R2 `02-horizontal-pin` + **카드별 `--pz` 개별 트윈** | — | — | mat-01…06 · prod-01…05 |
| S5b | **Cylinder (신규)** | **없음** | `poster-cylinder` 12면 자동 6deg/s + 드래그·관성 | 호버 감속(포인터 진입 시 vel 감쇠) | arch×4 · fig×4 · abs×4 |
| S6 | Feature 대표작 (비핀) | IO 리빌 | — | `flip-expand-card` 클릭→풀 패널, ESC/스크림 닫힘 | arch-01…04 |
| S7 | Grounds 틸트 | IO 리빌 | — | `tilt-3d`(포인터 추종) + `spotlight-pointer` + 선택 상태 | abs-01…06 |
| S8 | Delivery **핀 4/4** | R6 `06-scale-clip-reveal` 원형 클립 | — | `hover-cross-open` 주변 4장(밀어내기 + 십자 프리뷰) | mat-03 + fig-01…04 |
| S9 | Plan 밝은 밴드 | IO 리빌 | 라이브 신호(JS 토글 — 무한 CSS 애니 상한 보호) | — | 0 (이미지 없음) |
| S10 | Footer 브레이크아웃 | IO 리빌 1회 조립(`background-size` 키프레임). **퇴장 트윈 없음** | — | `magnetic-cursor` CTA | mat-01/02(마스크) · amb-01 · hero-03…05 · amb-02/03 |

자산 커버리지 **61/61** — 미사용 0.

### 라이브러리 이식 / 각색 목록
전부 `docs/design-excellence/fx-library/<효과>/snippet.{css,js}` 원본을 옮기고, 각색 부분만 주석으로 표시했다.

| 효과 | 각색 | 사유 |
|---|---|---|
| `ambient-fold` | 광원·점멸만 채택(타이핑/캐럿/시머 제외), 점멸의 `box-shadow` 링 제거·주기 2.1→3.4s, 광원 42→66s | 폴드 무한 애니 6개 상한 · 포커스 링 계측이 두 스크린샷 차이를 "링 픽셀"로 세므로 폴드의 빠른 하드에지 변화가 오탐을 만든다 |
| `drift-collage` | 키프레임 원본 그대로, **애니메이션을 타일 7개가 아니라 레이어 2겹**에 건다. 진폭 14→8px, 주기 17/23/29s → 34/46/58s | 타일마다 걸면 무한 애니 14개 = 상한 초과. 레이어별 주기·위상·진폭이 달라 "한 덩어리" 는 피한다 |
| `poster-cylinder` | 원본 그대로(JS 루프·IO 정지 포함). `.cyl-vp{overflow:hidden}` 래퍼 추가 | 3D 면이 뷰포트 밖으로 나가지 않게 클리핑 조상 제공 |
| `stack-fan-hover` | CSS `abs()` 대신 빌더가 카드마다 `--a=|i|` 발행 | `abs()` 미지원 엔진에서 선언 전체가 드롭된다 |
| `hover-cross-open` | `clip-path` 를 transition 이 아니라 `@keyframes` 로 | LI-14: opacity/transform/색 외 속성의 200ms 초과 transition 금지 |
| `flip-expand-card` | 호버 예고를 `translateY+scale` → `brightness+shadow` | DESIGN §2 "호버는 변형하지 않는다" (r2 리뷰의 hover transform 모순) |
| `entry-curtain-count` | `html.js` 게이트, max 2600→1800ms, 색은 토큰 | no-JS 에서 커튼이 페이지를 덮으면 안 된다 |
| `magnetic-cursor` | 원본 그대로 | 포인터 추종 = 호버 변형 금지의 명시 예외 |
| `film-grain`·`glass-panel`·`spotlight-pointer`·`tilt-3d`·`split-text-rise`·`text-scramble`·`light-sweep-sheen` | r2 에서 유지 | — |
| 제외 | `border-beam`·conic `.beam`·`.glow` breathe·`gradient-text-shift` | 전부 무한 애니메이션. 폴드 6개 예산을 유휴 층에 배정했다 |

### 라이선스 인용 (`fx-library/scroll-gsap/lib/LICENSES.md`, 2026-09-04 확인)
- `gsap315.min.js`, `ScrollTrigger315.min.js` — GSAP 3.15.0, **GSAP Standard License**(gsap.com/standard-license): 상업 이용 포함 무료. 금지 사용은 "Webflow 비주얼 애니메이션 빌더와 경쟁하는 도구"뿐이며 FAQ 가 AI 생성 코드를 허용 사용으로 명시. 본 용도(프롬프트→완성 HTML 산출)는 허용. **제품이 노코드 편집기로 진화하면 재검토.**
- `lenis.min.js` 는 쓰지 않았다(기본 off).
- fx-library 스니펫 10종 — 전부 oh-my-design 자작, **MIT**.
- 예산(gzip 기준, 스토리보드 C2 개정치 60KB): GSAP+ScrollTrigger **44.7KB gzip** + 인라인 스니펫 ≈4KB = **≈49KB** ✓

---

## 4. 회귀 항목 (r3-build-notes "반드시 고칠 것")

| # | 항목 | 처리 |
|---|---|---|
| 1 | 정착 타이밍 양방향 | 4개 핀 전부 `end: "+=" + travel*k`. 무사건 구간 없음 — S1 의 774px 무사건 구간은 트랙을 2.15→2.10vh 로 줄이고 k 를 0.38 로 낮춰 사라졌다(홀드 0.68vh) |
| 2 | S3 토큰 인과 | 프레임 표 `FRAMES[8]`(height/hour/lens/changed) **하나**가 캡션·토큰 슬롯·밑줄을 동시에 만든다 → 1:1 이 구조로 보장. 프레임마다 정확히 한 값만 바뀌고 밑줄이 그 슬롯으로 이동 |
| 3 | S5 카드별 `--pz` | 카드마다 `data-pz-from/to` 를 발행하고 **카드별 트윈**이 자기 값을 읽는다(−124→12 … −46→70, 11장 전부 다름) |
| 4 | 390 안무 0 | `.static` 에서도 IO 리빌 + **시퀀스 자동재생 3s**(IO 로 화면 밖이면 정지) + **원통 자동회전** 유지. 계측: 390 에서 3.4초 뒤 프레임이 실제로 바뀜(`10000000 → 01000000`), h1 top 123px |
| 5 | 라벨 11→13px · 토큰 밖 hex · `:active`/`disabled` · hover transform | `.mono`/`.cap`/`.hero-meta`/`.specs`/`.fx-cross__label` 전부 13px(라벨 노드 60). **토큰 밖 hex 0**(빌더가 매 빌드 검사, 파생값은 토큰의 rgba 로만). `.btn:active{brightness(.96)}` + `.btn:disabled{opacity:.4}` 정의, S3 Prev/Next 가 프레임 양끝에서 실제로 disabled 된다. 호버 변형은 세 개의 선언된 미디어 호버 동사(fan/cross/flip)와 포인터 추종(tilt/magnetic)에만 한정 |
| 6 | §5 예산 | 핀 4 (DESIGN §5 는 2 허용 → 스토리보드 선언대로 4 로 개정된 것으로 본다). 총 **14.38vh** ≤ 14.5 |

---

## 5. 유휴·호버 층 (스토리보드 C8)

- **스크롤 0 에서 살아 있는 것**: 광원 드리프트 1 · 라이브 점멸 1 · 표류 레이어 3 = 무한 애니 **5개**(상한 6). 원통은 rAF + IntersectionObserver 로 화면 밖에서 꺼진다(무한 CSS 애니 0).
- **호버 팟**: S2 `stack-fan-hover`(오버슛 이징 `cubic-bezier(.2,1.28,.34,1)`), S6 `flip-expand-card`(FLIP/WAAPI), S8 `hover-cross-open`(밀어내기 + 십자 clip-path), S10 `magnetic-cursor`.
- **원통 1개** — 화면당 3D 유휴 동사 1 규칙 준수(`coverflow-ring` 미채택, `inertia-drag-gallery` 는 가로 핀과 축 배타라 미채택).
- **섹션당 상한** 스크롤 1 + 유휴 1 + 호버 1 을 넘긴 섹션 없음.

### reduced-motion 3분류
| 효과 | 처리 |
|---|---|
| 광원 드리프트 · 표류 콜라주 · 원통 | **정지하되 남긴다**(구도) |
| 진입 커튼 · split-text-rise · 시퀀스 | **완성 상태로 스냅**(커튼 즉시 done, 프레임 1 고정, ScrollTrigger 0개) |
| 라이브 점멸 · 자석 커서 · 틸트 · sheen | **제거한다**(장식) |

`prefers-reduced-motion` 에서 `ScrollTrigger` 는 하나도 만들어지지 않는다(`.anim` 게이트). no-JS 에서는 클래스가 하나도 안 붙어 8프레임 그리드·펼쳐진 스택·전체 콘텐츠가 그대로 보인다(text-contrast no-JS 숨김 0).

---

## 6. 첫 뷰포트 액센트

계측(1440×900, scrollY=0): 라임(`#D1FE17`) 요소 **1개** — `a.btn.btn--accent`(nav CTA). 라이브 점멸 도트는 `--ink` 로, S3 진행 레일과 S7 선택 상태와 S9 면 1회는 폴드 밖. 태그·캡션 전부 중성(`--mute`).
명도 반전 4회: `D D D **L** D D D D D **L** D` (S4 밝게 → S5 암전 → S9 밝게 → S10 암전).

---

## 7. 남은 문제 / 다음 라운드 후보

1. **홀드가 규칙 바닥에 가깝다.** 0.67~0.74vh 로 LC-48 의 0.6 은 넘지만 스토리보드가 원한 1.0~1.35vh 에는 못 미친다. 근본 원인은 `총 ≤14.5vh` 와 `LI-2 비핀 중앙값 ≥0.8vh` 의 동시 제약. 늘리려면 (a) 예산을 16~17vh 로 올리거나 (b) 비핀 섹션을 7개 → 5개로 합쳐 핀에 2vh 를 더 줘야 한다. **예산 정책 결정이 필요하다.**
2. **S3 프레임 간격 105px.** 8프레임을 940px 스크럽에 넣어 프레임당 0.13vh 다(스냅으로 보정). 프레임을 6개로 줄이면 프레임당 0.17vh 로 여유가 생긴다 — 이미지셋을 바꾸지 않는다는 제약 때문에 이번엔 8을 유지했다.
3. **h1 상한 94px.** DESIGN §3 의 디스플레이 128px 은 13px 라벨과 함께 쓰면 LI-7(디스플레이:본문 2.5~7.5)을 깬다(128/13 = 9.8). 94px 로 낮췄다. DESIGN §3 의 사이즈 스케일을 128/80/48 → 96/64/40 으로 개정할지 결정이 필요하다.
4. **폴드 무한 애니 5개는 계측 예산과 충돌한다.** `text-contrast` 의 포커스 링 계측은 "두 스크린샷의 차이 = 링 픽셀"로 보기 때문에 폴드에서 빠르게 변하는 요소가 있으면 오탐이 난다. r3 은 진폭·주기를 낮춰 통과했지만, 유휴 층을 더 화려하게 만들면 다시 부딪힌다. **계측기 쪽에 "무한 애니메이션 일시정지 후 촬영" 을 넣는 것이 옳은 해결**로 보인다(도구 개선 제안).
5. **S5b 원통의 터치 드래그**는 `touch-action: pan-y` 로 세로 스크롤을 양보한다 — 390 에서 가로 드래그는 되지만 관성이 짧다. 실기기 확인 미실시(헤드리스만).
6. `--pz` 카드별 트윈 11개가 같은 창으로 접히므로 LI-33 상 창은 4개다. 창을 쪼개면(카드별 다른 end) 판정이 카드마다 나오지만 예산상 이번엔 하나로 뒀다.

---

## 8. 빌드 이력 (3회 이내)

| 회차 | 실패 | 조치 |
|---|---|---|
| 1 | `LI-12` 지배 지속시간 5종(480/240/160/720/320) · `LI-14` `background-size` 720ms transition | 320ms 를 240ms 로 흡수(80ms 배수 격자 유지) · S10 조립을 transition → `@keyframes fx-breakout` 로. 동시에 트랙/k 를 `TRACK{210,235,265,220}` `K{.38,.50,.55,.42}` 로 재조정해 홀드 여유를 0.63→0.70vh 로 올림 |
| 2 | `text-contrast` 텍스트 1 · 포커스 링 5 · no-JS 숨김 2 | ① 점멸 도트의 `box-shadow` 링 제거·주기 3.4s, 표류 진폭 14→8px·주기 2배, 광원 42→66s — 포커스 링 계측은 "두 스크린샷의 차이 = 링 픽셀"이라 폴드의 빠른 변화가 오탐이 된다. ② 도트를 `p.mono` 텍스트 사각형 밖으로 분리. ③ `html:not(.js)` 에서 `.fx-cross__preview`·`.fx-flip__scrim` 을 `display:none` — no-JS 에서 열릴 수 없는 오버레이가 "숨겨진 큰 면"으로 잡혔다 |
| 3 | 육안: 원통 면이 상·하로 잘림 | 원근 확대(`1500/(1500−400) = 1.36×`)를 감안해 `.fx-cyl` 높이 330→400px, 면 224px/폭 190px 로. 확장 카드 캡션 그라디언트도 3-stop 으로 심화 |

최종: `render-integrity PASS` · `text-contrast fail=0` · `landing-integrity FAIL 0 · WARN 0` · `scrub-timing-probe defects=0` · 콘솔 에러 0 · 14.38vh · 폴드 무한 애니 5 · 첫 뷰포트 라임 1 · 390 h1 top 123px.
