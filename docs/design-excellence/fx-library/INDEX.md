# fx-library — 효과 레퍼런스 라이브러리

렌더 시 네트워크 요청 0. 모든 스니펫은 인라인 가능하고, 외부 라이브러리 의존이 **0개**다.
각 폴더는 `README.md`(출처·라이선스·언제 쓰나·금기) + `demo.html`(단독 동작) + `snippet.css` / `snippet.js` 로 구성된다.

검증: 17/17 데모가 헤드리스 크로미움에서 **콘솔 에러 0**, 다크/라이트 양쪽 렌더 확인 (2026-09-04).

## 목록

| 효과 | 계열 | 태그 | CSS-only | 크기 | 다크/라이트 | 라이선스 |
|---|---|---|---|---|---|---|
| [aurora-mesh](aurora-mesh/) | 빛·배경 | 메시 그라디언트, 표류, 히어로 | ✅ | ~1.3KB | 둘 다 (라이트는 opacity↓) | MIT (자작) |
| [border-beam](border-beam/) | 빛 | 회전 테두리, 강조, @property | ✅ | ~0.9KB | 둘 다 (빔 색 교체 필수) | MIT (자작) |
| [light-sweep-sheen](light-sweep-sheen/) | 빛 | 정반사, 1회성, CTA | ✅ | ~0.9KB | 둘 다 (라이트는 알파↑) | MIT (자작) |
| [spotlight-pointer](spotlight-pointer/) | 커서·빛 | 포인터 추종, 카드 그리드 | JS 22줄 | ~1.4KB | 둘 다 (라이트는 브랜드색) | MIT (자작) |
| [film-grain](film-grain/) | 재질 | 노이즈, 밴딩 제거, feTurbulence | ✅ | ~1.0KB | 둘 다 (blend 교체 필수) | MIT (자작) |
| [glass-panel](glass-panel/) | 재질 | 유리, backdrop-filter, 상단바 | ✅ | ~1.1KB | 둘 다 (tint 교체 필수) | MIT (자작) |
| [holo-foil](holo-foil/) | 재질 | 홀로그램, 이리데선스, 카드 | JS 24줄 | ~2.0KB | 둘 다 (다크 우세) | MIT (자작) |
| [dot-grid-field](dot-grid-field/) | 배경 | 도트·라인 격자, 마스크, 좌표계 | ✅(변형만 JS 8줄) | ~1.0KB | 둘 다 (도트색 반전 필수) | MIT (자작) |
| [mask-wipe-reveal](mask-wipe-reveal/) | 이미지 리빌 | 마스크, 스크롤 구동, sweep/iris/blind | ✅ | ~1.6KB | 둘 다 | MIT (자작) |
| [pixel-dissolve](pixel-dissolve/) | 이미지 리빌 | 격자 디졸브, 생성 서사 | JS 10줄 | ~1.1KB | 둘 다 (덮개색 일치 필수) | MIT (자작) |
| [split-text-rise](split-text-rise/) | 텍스트 | 단어/문자 stagger, 블러 인 | JS 24줄 | ~1.5KB | 둘 다 | MIT (자작) |
| [text-scramble](text-scramble/) | 텍스트 | 해독, 수치 갱신, 폭 고정 | JS 36줄 | ~1.5KB | 둘 다 | MIT (자작) |
| [gradient-text-shift](gradient-text-shift/) | 텍스트·빛 | background-clip:text, @property | ✅ | ~0.8KB | 둘 다 (currentColor 상속) | MIT (자작) |
| [tilt-3d](tilt-3d/) | 깊이 | 포인터 틸트, 시차 레이어 | JS 26줄 | ~1.4KB | 둘 다 | MIT (자작) |
| [sticky-card-stack](sticky-card-stack/) | 깊이·스크롤 | sticky 스택, 프로세스 단계 | ✅ | ~0.8KB | 둘 다 (다크 우세) | MIT (자작) |
| [view-transition-morph](view-transition-morph/) | 전환 | View Transitions, 목록→상세 | JS 1줄 | ~0.9KB | 둘 다 | MIT (자작) |
| [magnetic-cursor](magnetic-cursor/) | 커서 | 자석 버튼, 반경 감쇠 | JS 30줄 | ~1.4KB | 둘 다 | MIT (자작) |

## 계열별 색인
- **빛**: aurora-mesh · border-beam · light-sweep-sheen · spotlight-pointer · gradient-text-shift
- **재질**: film-grain · glass-panel · holo-foil
- **이미지 리빌**: mask-wipe-reveal · pixel-dissolve
- **텍스트**: split-text-rise · text-scramble · gradient-text-shift
- **깊이**: tilt-3d · sticky-card-stack
- **전환**: view-transition-morph
- **커서**: spotlight-pointer · magnetic-cursor
- **배경**: aurora-mesh · dot-grid-field · film-grain

## 조합이 검증된 쌍
- `tilt-3d` + `holo-foil` — JS 가 내보내는 `--fx-foil-tilt-x/y` 로 자동 연동
- `spotlight-pointer` + `dot-grid-field --reveal` — 같은 `--fx-spot-x/y` 변수를 공유
- `aurora-mesh` + `film-grain` — 그라디언트 밴딩 제거. 사실상 세트
- `mask-wipe-reveal` + `split-text-rise` — 이미지와 문장이 같은 스크롤 구간에서 함께 열림

## 배경 레이어 예산 (중요)
배경 레이어는 **최대 2겹**이다. `aurora-mesh` + `film-grain` 을 쓰면 `dot-grid-field` 는 빼야 한다.
빛 효과도 **한 화면에 강조 1개**. border-beam 3개 = 강조 0개다.
