# fx-library — 효과 레퍼런스 라이브러리

렌더 시 네트워크 요청 0. 모든 스니펫은 인라인 가능하고, 외부 라이브러리 의존이 **0개**다.
각 폴더는 `README.md`(출처·라이선스·언제 쓰나·금기) + `demo.html`(단독 동작) + `snippet.css` / `snippet.js` 로 구성된다.

검증: **27/27** 데모(`demo.html` 단독 파일 기준. `scroll-gsap` 은 레시피 9종을 별도 검증)가 헤드리스 크로미움에서 **콘솔 에러 0 · 가로 오버플로 0**, 다크/라이트 양쪽 렌더 확인.
신규 10종(유휴·호버 계열)은 **가로 오버플로 0 · 드래그/호버 상호작용 스모크 · reduced-motion 통과**까지 확인했다 (2026-09-04).
**큰 이미지 3종**(`fullbleed-scale-reveal` · `wide-drum` · `persistent-expand`)은 위에 더해 **배율·이동량·열림 폭을 수치로 계측**하고 `preview.jpg` 를 남겼다 (2026-09-04, 1440×900).

## 층(layer) — 이게 목록보다 중요하다
효과는 **시간 축이 누구 것인가**로 나뉜다. 세 축을 한 섹션에 다 쓰면 페이지가 무너진다.

| 층 | 시간 축 | 역할 | 섹션당 상한 |
|---|---|---|---|
| **유휴(idle)** | 자기 자신 (rAF / keyframes) | "이 페이지는 살아 있다" | **1** |
| **호버(hover)** | 사용자 의도 | "내 행동이 통한다" | **1** |
| **스크롤(scroll)** | 스크롤 위치 | "내가 이야기를 진행시킨다" | **1** |

근거와 배정 규칙: `docs/research/idle-spectacle-2026-09-04.md` §7.1

## 목록

### 유휴(idle) — 스크롤 0, 입력 0 에서도 움직인다
| 효과 | 태그 | CSS-only | 크기 | 다크/라이트 | 라이선스 |
|---|---|---|---|---|---|
| [wide-drum](wide-drum/) | **전폭 포스터 띠**, 타일 56vh, 자동 흐름+드래그+관성, 통 명암 | 아니오 (JS 81줄) | ~3.1KB gz | 둘 다 (라이트는 명암 계수↓) | MIT (자작) |
| [persistent-expand](persistent-expand/) | **큰 패널 62%·68vh**, 5.2s 자동 순환, 클릭 고정, 호버는 2% 리프트만 | 아니오 (JS 63줄) | ~3.1KB gz | 둘 다 (본문 그라디언트 교체) | MIT (자작) |
| [poster-cylinder](poster-cylinder/) | 3D 원통 캐러셀, 자동 회전+드래그+관성, 면 명암 | 폴백만 (JS 62줄) | ~3.2KB | 둘 다 (라이트는 그림자↓) | MIT (자작) |
| [coverflow-ring](coverflow-ring/) | 커버플로우, 소수 인덱스, 자동 전진, 반사 | JS 58줄 | ~3.0KB | 둘 다 (반사 알파↓) | MIT (자작) |
| [ambient-fold](ambient-fold/) | 광원 드리프트 · 타이핑 · 상태 점멸 3계열 | ✅ | ~1.6KB | 둘 다 (광원·시머색 교체 필수) | MIT (자작) |
| [drift-collage](drift-collage/) | 히어로 콜라주 표류, 위상 어긋남 | ✅ | ~1.3KB | 둘 다 (veil 색 교체 필수) | MIT (자작) |

### 호버 — 사용자 의도에 즉답한다
| 효과 | 태그 | CSS-only | 크기 | 다크/라이트 | 라이선스 |
|---|---|---|---|---|---|
| [flip-expand-card](flip-expand-card/) | FLIP 확장, WAAPI, 자식 역스케일 | JS 46줄 | ~2.8KB | 둘 다 (scrim 알파↓) | MIT (자작) |
| [stack-fan-hover](stack-fan-hover/) | 스택 부채 펼침, 오버슛 이징 | ✅ | ~1.2KB | 둘 다 | MIT (자작) |
| [hover-cross-open](hover-cross-open/) | 그리드 밀어내기 + clip-path 십자 프리뷰 | JS 34줄 | ~2.6KB | 둘 다 (bg 교체 필수) | MIT (자작) |
| [cursor-image-trail](cursor-image-trail/) | 커서 이미지 트레일, 거리 임계, 풀 재사용 | JS 38줄 | ~2.2KB | 둘 다 | MIT (자작) |
| [spotlight-pointer](spotlight-pointer/) | 포인터 추종, 카드 그리드 | JS 22줄 | ~1.4KB | 둘 다 (라이트는 브랜드색) | MIT (자작) |
| [magnetic-cursor](magnetic-cursor/) | 자석 버튼, 반경 감쇠 | JS 30줄 | ~1.4KB | 둘 다 | MIT (자작) |
| [tilt-3d](tilt-3d/) | 포인터 틸트, 시차 레이어 | JS 26줄 | ~1.4KB | 둘 다 | MIT (자작) |

### 입력 · 진입
| 효과 | 태그 | CSS-only | 크기 | 다크/라이트 | 라이선스 |
|---|---|---|---|---|---|
| [inertia-drag-gallery](inertia-drag-gallery/) | 관성 드래그, 고무 경계, 속도 기울기 | JS 50줄 | ~2.6KB | 둘 다 | MIT (자작) |
| [entry-curtain-count](entry-curtain-count/) | 진입 커튼 + 정직한 카운트업 | JS 44줄 | ~2.7KB | 둘 다 (bg 교체 필수) | MIT (자작) |
| [view-transition-morph](view-transition-morph/) | View Transitions, 목록→상세 | JS 1줄 | ~0.9KB | 둘 다 | MIT (자작) |

### 빛 · 재질 · 배경
| 효과 | 태그 | CSS-only | 크기 | 다크/라이트 | 라이선스 |
|---|---|---|---|---|---|
| [aurora-mesh](aurora-mesh/) | 메시 그라디언트, 표류, 히어로 | ✅ | ~1.3KB | 둘 다 (라이트는 opacity↓) | MIT (자작) |
| [border-beam](border-beam/) | 회전 테두리, 강조, @property | ✅ | ~0.9KB | 둘 다 (빔 색 교체 필수) | MIT (자작) |
| [light-sweep-sheen](light-sweep-sheen/) | 정반사, 1회성, CTA | ✅ | ~0.9KB | 둘 다 (라이트는 알파↑) | MIT (자작) |
| [film-grain](film-grain/) | 노이즈, 밴딩 제거, feTurbulence | ✅ | ~1.0KB | 둘 다 (blend 교체 필수) | MIT (자작) |
| [glass-panel](glass-panel/) | 유리, backdrop-filter, 상단바 | ✅ | ~1.1KB | 둘 다 (tint 교체 필수) | MIT (자작) |
| [holo-foil](holo-foil/) | 홀로그램, 이리데선스, 카드 | JS 24줄 | ~2.0KB | 둘 다 (다크 우세) | MIT (자작) |
| [dot-grid-field](dot-grid-field/) | 도트·라인 격자, 마스크, 좌표계 | ✅(변형만 JS 8줄) | ~1.0KB | 둘 다 (도트색 반전 필수) | MIT (자작) |

### 이미지 리빌 · 텍스트 · 스크롤
| 효과 | 태그 | CSS-only | 크기 | 다크/라이트 | 라이선스 |
|---|---|---|---|---|---|
| [fullbleed-scale-reveal](fullbleed-scale-reveal/) | **62vw → 100vw 확대 후 정지(hold)**, 핀 스크롤, `--e` 1변수 | 아니오 (JS 38줄) | ~2.5KB gz | 둘 다 | MIT (자작) |
| [mask-wipe-reveal](mask-wipe-reveal/) | 마스크, 스크롤 구동, sweep/iris/blind | ✅ | ~1.6KB | 둘 다 | MIT (자작) |
| [pixel-dissolve](pixel-dissolve/) | 격자 디졸브, 생성 서사 | JS 10줄 | ~1.1KB | 둘 다 (덮개색 일치 필수) | MIT (자작) |
| [split-text-rise](split-text-rise/) | 단어/문자 stagger, 블러 인 | JS 24줄 | ~1.5KB | 둘 다 | MIT (자작) |
| [text-scramble](text-scramble/) | 해독, 수치 갱신, 폭 고정 | JS 36줄 | ~1.5KB | 둘 다 | MIT (자작) |
| [gradient-text-shift](gradient-text-shift/) | background-clip:text, @property | ✅ | ~0.8KB | 둘 다 (currentColor 상속) | MIT (자작) |
| [sticky-card-stack](sticky-card-stack/) | sticky 스택, 프로세스 단계 | ✅ | ~0.8KB | 둘 다 (다크 우세) | MIT (자작) |
| [scroll-gsap](scroll-gsap/) | GSAP+ScrollTrigger 레시피 9종 | 아니오 | 114.7KB | 둘 다 | GSAP Standard(무료) |

## 계열별 색인
- **유휴**: **wide-drum** · **persistent-expand** · poster-cylinder · coverflow-ring · ambient-fold · drift-collage · aurora-mesh(배경)
- **호버**: flip-expand-card · stack-fan-hover · hover-cross-open · cursor-image-trail · tilt-3d · spotlight-pointer · magnetic-cursor
- **드래그/관성**: inertia-drag-gallery · **wide-drum** · poster-cylinder · coverflow-ring
- **진입**: entry-curtain-count · split-text-rise
- **빛**: aurora-mesh · border-beam · light-sweep-sheen · spotlight-pointer · gradient-text-shift · ambient-fold
- **재질**: film-grain · glass-panel · holo-foil
- **이미지 리빌**: **fullbleed-scale-reveal** · mask-wipe-reveal · pixel-dissolve · hover-cross-open
- **텍스트**: split-text-rise · text-scramble · gradient-text-shift · ambient-fold(타이핑)
- **깊이**: tilt-3d · sticky-card-stack · stack-fan-hover · poster-cylinder · **wide-drum**
- **전환**: view-transition-morph · flip-expand-card · **persistent-expand**(클릭 지속)
- **배경**: aurora-mesh · dot-grid-field · film-grain · drift-collage

## 큰 이미지 축 (r4 신설) — "소극적인 사이즈" 를 구조적으로 막는 3종
| 실패 모드 | 처방 | 효과 | 기본값이 강제하는 것 |
|---|---|---|---|
| 이미지가 작다 | 확대의 끝을 화면 끝으로 못 박는다 | [fullbleed-scale-reveal](fullbleed-scale-reveal/) | 시작 62vw → 끝 100vw, 여정 55% 지점에서 **정지 후 hold** |
| 가만히 두면 죽어 있다 | 유휴 축을 이미지에 준다 | [wide-drum](wide-drum/) | 전폭 띠 · 타일 **56vh** · 62px/s 자동 흐름 |
| 호버해야만 펼쳐진다 | 열림을 지속 상태로 만든다 | [persistent-expand](persistent-expand/) | 열린 패널 **62% × 68vh** · 5.2s 자동 순환 · **클릭 고정** |

세 효과의 공통 규칙: **호버는 여는 장치가 아니다**(멈춤·2% 리프트까지), **닫힌 상태에서도 무엇인지 읽힌다**,
**터치에서 잃는 것이 없다**, `prefers-reduced-motion` 에서 **이미지는 남고 운동만 사라진다**.

## 조합이 검증된 쌍
- `tilt-3d` + `holo-foil` — JS 가 내보내는 `--fx-foil-tilt-x/y` 로 자동 연동
- `spotlight-pointer` + `dot-grid-field --reveal` — 같은 `--fx-spot-x/y` 변수를 공유
- `aurora-mesh` + `film-grain` — 그라디언트 밴딩 제거. 사실상 세트
- `mask-wipe-reveal` + `split-text-rise` — 이미지와 문장이 같은 스크롤 구간에서 함께 열림
- **`ambient-fold` + `drift-collage`** — 빛(광원)과 물체(타일)가 서로 다른 주기로 움직인다. 폴드 유휴 세트
- **`entry-curtain-count` → `ambient-fold`** — 커튼이 열리는 순간 광원이 이미 돌고 있다

## 배타 관계 (같이 쓰면 고장난다)
- **3D 유휴 동사는 화면당 1개** — `poster-cylinder` ↔ `coverflow-ring` ↔ `wide-drum`
- **유휴 동사는 섹션당 1개** — `wide-drum` ↔ `persistent-expand` ↔ `drift-collage` ↔ `ambient-fold`
- **핀 구간은 페이지당 4개까지** — `fullbleed-scale-reveal`(190vh/개) 를 3개 넘게 쓰면 문서가 끝없이 길어진다
- **호버 동사는 섹션당 1개** — `flip-expand-card` ↔ `hover-cross-open` ↔ `stack-fan-hover` ↔ `tilt-3d`
- **가로 축 배타** — `inertia-drag-gallery` ↔ `wide-drum` ↔ 가로 핀 스크롤(scroll-gsap R2). 같은 축을 두 주체가 다투면 둘 다 고장난다
- **배경 2겹** — `aurora-mesh` ↔ `ambient-fold`(광원) ↔ `drift-collage` ↔ `dot-grid-field` 중 최대 2
- `cursor-image-trail` 은 페이지당 1구역, CTA·본문 위 금지

## 예산 규칙 (중요)
- **배경 레이어는 최대 2겹.** `aurora-mesh` + `film-grain` 을 쓰면 `dot-grid-field` 는 빼야 한다.
- **빛 효과는 한 화면에 강조 1개.** border-beam 3개 = 강조 0개다.
- **폴드 안에서 도는 무한 애니메이션은 6개까지** (경쟁사 실측 상한 — `docs/research/idle-spectacle-2026-09-04.md` §2 b-1).
- **유휴 층은 화면 밖에서 꺼진다.** `IntersectionObserver` 로 rAF/타이머 정지. 배터리를 먹는 유휴 효과는 유휴 효과가 아니다.
- **reduced-motion 3분류를 반드시 정한다** — ① 정지하되 남긴다(구도) ② 완성 상태로 스냅(정보) ③ 제거한다(장식).
