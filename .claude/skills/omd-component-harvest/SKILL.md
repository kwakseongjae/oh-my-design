---
name: omd-component-harvest
description: "기존 references/<id>의 §8 Component Patterns + frontmatter `tokens.components`를 멀티서피스(여러 라우트 + 메뉴/모달 인터랙션) + 공개 디자인시스템(Storybook/Primer/Polaris/Cedar/Geist/*.design) 크롤로 풍부화. 단일 랜딩 스냅샷의 '버튼 수준'을 모달·탭·테이블·토스트·폼상태까지 확장하되, 소스가 빈약하면(랜딩만 있는 앱 중심 기업) 억지로 만들지 않고 정직하게 cap. 완료 시 `tokens.components_harvested: true` 마커. '컴포넌트 풍부화', '컴포넌트 하베스트', 'X 컴포넌트 보강', 'component harvest' 류에 트리거. 토큰 자체가 없으면 먼저 omd-token-backfill/omd-add-reference."
---

# omd:component-harvest — deepen a reference's component documentation

단일 랜딩 인스펙트는 컴포넌트를 **버튼/카드/내브 수준**에서 멈춘다(모달·데이트피커·테이블·토스트·탭·스텝퍼·빈상태·폼에러는 클릭/로그인/앱 라우트 뒤에 있음). 이 스킬은 **인스펙션 표면을 넓혀**(멀티 라우트 + 인터랙션 + 공개 DS 크롤) §8과 `tokens.components`를 풍부하게 만든다 — **단, 정직성 게이트를 유지**한다.

## 제1원칙 — 억지로 만들지 않는다 (정직성)
> "도전은 하되, 소스가 빈약하면 무리해서 뭔가를 만들어 제공해야 한다는 강박을 두지 않는다."

- 풍부함은 **소스가 허락하는 만큼**만. 랜딩 한 장 + 앱스토어 스크린샷뿐인 모바일 앱 중심 기업은 **6개에서 정직하게 멈춘다**. 채우려고 컴포넌트를 발명(confabulate)하지 않는다.
- 우리 게이트는 **색(hex) grounding만** 강제한다. 컴포넌트 세부 스펙은 게이트가 전수 검증하지 않으므로, **출처 없는 스펙을 쓰면 그게 곧 confabulation**이다. 측정했거나 공개 DS에 문서화된 것만 쓴다.

## 티어링 (소스 신뢰도 순)
1. **공개 DS 있음** (primer.style·polaris·cedar·geist·*.design·공개 Storybook/Figma) → **헤비 크롤**. DS 문서의 컴포넌트 인벤토리 + 정확한 토큰명·radius·height를 lift. (github=Primer가 모범 사례: 0→41.)
2. **공개 DS 없으나 웹앱 깊음** (SaaS 대시보드, 다중 마케팅 라우트) → **멀티 라우트 + 인터랙션**: pricing/docs/login/blog 방문, 메뉴·모달·드롭다운 열어 getComputedStyle. 본 것만 기록.
3. **소스 빈약** (랜딩 1장, 앱 중심) → **정직한 cap**. 보이는 3~6개만, `note`에 "landing-only / app-first — capped" 명시. **그래도 `components_harvested: true`** (= "시도했고, 이게 소스의 끝").

## 절차 (ref 1개)
1. **베이스라인** — `references/<id>/DESIGN.md` 전체 읽기. 현재 §8 컴포넌트 수 + `tokens.components` 수 기록.
2. **소스 판별** — 공개 DS 존재 여부 확인(브랜드명 + "design system"/"storybook"/"primer/polaris/cedar/geist", `*.design` 서브도메인). 티어 결정.
3. **하베스트**:
   - 라이브: playwright `getComputedStyle` (GLOBAL_ROOT=$(npm root -g), `--disable-http2`, networkidle, 쿠키/모달 dismiss). 여러 라우트면 순회. 가능하면 메뉴/모달 열어 캡처.
   - 공개 DS: 컴포넌트 인덱스 + 각 컴포넌트의 shape(radius)/size(height·padding)/color roles/states를 **실제 토큰명으로** lift.
4. **§8 재작성** — `## 8. Component Patterns`를 그룹화(Actions/Navigation/Forms/Data display/Overlays/Feedback & Status)된 `**component**` 항목들로. 각 항목에 구체 스펙(radius/height/padding/color/states). 소스가 빈약하면 적게 — 발명 금지.
   - `## Responsive Behavior` 표(브레이크포인트 + 변화)도 공개 DS에 있으면 보강.
5. **tokens 블록** — `tokens.components` 맵 갱신(헤비면 15+, cap이면 3~6). `tokens.components_harvested: true` 추가. 공개 DS 출처면 `source: design-system`도 검토.
6. **미러** — `design-md/<id>/DESIGN.md` 복사.
7. **검증 + 트래킹** — `cd web && node scripts/build-registry.mjs && npx vitest run` (정합성·proof·leak 게이트 통과). `node scripts/token-status.mjs --components`로 harvested 카운트 +1 확인.

## 하드 규칙 (테스트가 강제)
- `colors` hex는 6-digit `#rrggbb`만, 전부 산문에 grounding. (rgba는 shadow/note만.)
- frontmatter 닫는 `---` **위**에 `##`/`-` 프로즈 금지(leak 가드).
- flow 매핑 `{` 앞 공백.
- **출처 없는 컴포넌트 스펙 금지.** 측정값 또는 공개 DS 문서만.

## 마커 & 체크리스트
- 완료 표식: `tokens.components_harvested: true` (리치든 정직-cap이든 "패스 돌림"의 의미). 이게 있으면 트래커가 더 이상 candidate로 안 띄움 → **빈약한 ref를 영원히 nag하지 않음.**
- **`web/scripts/token-status.mjs`** 가 컴포넌트 체크리스트:
  - `--components` → harvested · rich(unmarked) · candidates 카운트 + candidate 목록(토큰 있고 <10 comp, 미harvest).
  - `--md` → "Components — Harvested / Harvest candidates" 섹션.

## 배치
**기본 5개 / run.** candidate 목록 앞에서 뽑되, 티어 섞기(공개 DS 1~2 + 일반 + cap 후보)로 원칙을 매번 검증. 재개는 token-status가 보장.

## 하지 말 것
- ❌ 숫자 채우려 컴포넌트 발명. ❌ 출처 없는 스펙. ❌ cap한 ref에 `components_harvested` 누락(트래커가 계속 nag함).
- ❌ 토큰 없는 ref를 여기서 처리(먼저 omd-token-backfill 또는 omd-add-reference Phase 4.5).
- ❌ 산문 본문에 `{token}` 참조 치환(렌더러 이슈).
