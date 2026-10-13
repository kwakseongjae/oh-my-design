# 제안: 글로벌 규격 호환 · 폰트 대체 · 셰이더 스킬 (2026-10-13)

근거:
- `docs/research/2026-10-13-trends/TRENDS.md`
- `spec/design-md-core-v2.md` §3, §4.3
- Google DESIGN.md 스펙 (github.com/google-labs-code/design.md, Apache-2.0)
- `AGENTS.md` hard rules

## 1. 규격: "Google 호환 상위집합(superset)"으로 바꾼다

**문제.**
- Core v2 §3은 YAML frontmatter를 금지한다(MUST NOT).
- 그래서 Google lint는 OmD 파일에서 토큰을 0개 읽는다.
- shadcn 스킬은 frontmatter 토큰(colors/typography/rounded/spacing/components)을 먼저 찾고, 없으면 프로즈에서 추론한다.
- 생태계는 Google 스펙 → VoltAgent(별 12만) → shadcn 공식 스킬 → Vercel·Atlassian·Clerk의 1차 게시로 수렴했다. 포맷 경쟁은 끝났다.

**금지했던 이유와 실제 충돌 범위.**
- §3이 막으려던 것은 **도구 메타데이터**다: omd 버전, 생성기, 품질 등급, 타임스탬프가 디자인 계약과 섞이는 것.
- Google frontmatter는 **디자인 토큰**이다. 메타데이터가 아니므로 금지 취지와 충돌하지 않는다.

**Google lint는 관대하다.**
- 모르는 섹션은 보존하고 오류를 내지 않는다.
- 모르는 키는 오타처럼 보일 때만 경고한다.
- 필수 섹션은 Overview, Colors, Typography 세 개뿐이고, 나머지는 순서만 지키면 된다.
- 선례: awesome-design-md-jp(별 990)는 Stitch 포맷에 일본어 조판(禁則·palt·混植) 섹션을 덧붙여 확장했다.

**제안 (Core v2.1).**
1. 정규 DESIGN.md 맨 위에 **Google 스키마 frontmatter**를 둔다.
   - 키: `name`, `description`, `colors`, `typography`, `rounded`, `spacing`, `components`.
   - **검증된 값만** 넣는다. 미확인 값은 키를 생략한다. Google 스펙의 `omitted` 키 활용을 검토한다.
   - OmD 메타데이터(버전, 등급, 근거)는 frontmatter에 넣지 않는다. §3의 취지를 유지한다.
2. 본문 섹션 순서를 Google의 8개 섹션에 맞춘다.
   - OmD 고유 내용은 Google이 보존하는 추가 섹션으로 둔다: Evidence boundary, CJK typesetting, States, Brand narrative.
3. 근거 그래프는 파일 밖 사이드카로 옮긴다.
   - 예: `/r/<id>/evidence.json`. 파일 안에는 링크 한 줄만 둔다.
4. **수용 기준:**
   - 521개 전부 `npx @google/design.md lint`에서 오류 0개.
   - shadcn 스킬 Step 3 추출 표가 frontmatter에서 바로 채워진다.
5. 읽기 쪽은 이미 dual-read를 한다(§10). 쓰기 쪽 writer와 레지스트리 빌드를 바꾸고, 521개를 한 번에 재생성한다.

**차별점은 규격이 아니라 내용에 둔다.**
- 값마다 붙은 근거
- CJK 조판 섹션
- 검증 등급

글로벌 도구에서 그대로 읽히는 파일이 되면, "어디서 DESIGN.md를 구하나"라는 질문에 OmD가 답이 된다.

## 2. 폰트: "브랜드 사실"과 "권장 대체"를 분리해 둘 다 적는다

**현실.**
- 실회사 브랜드 폰트는 대부분 독점이다(Toss Product Sans, 배민체 계열 등). 사용자는 합법적으로 구할 수 없다.
- 바이브코딩에서는 에이전트가 폰트를 빠뜨리거나 Inter·system-ui로 채운다.
- 대체 폰트를 적지 않는 지금 방식은 결과적으로 **에이전트가 임의로 고르게 만든다.** shadcn 스킬도 "DESIGN.md에 적힌 대체 폰트를 쓰라"고 지시한다.

**규칙과의 관계.**
- 스펙 §4.3과 AGENTS.md가 금지하는 것은 대체 폰트를 **브랜드 서체인 것처럼 제시하는 것**이다.
- 이름표를 단 권장 대체("브랜드 서체 아님")는 금지 대상이 아니다.
- 다만 AGENTS.md 문구가 "substitution"을 넓게 막는 것으로 읽힐 수 있다. 그래서 문구 정정이 필요하다(오너 결정).

**제안 — 서체를 3층으로 적는다.**

| 층 | 내용 | 표기 |
|---|---|---|
| 1. 브랜드 서체 (사실) | 이름, 출처, 라이선스, 구할 수 있는지(독점 / 무료 배포 / 다운로드 링크) | 근거 필요. 미확인이면 생략 |
| 2. 권장 대체 (OmD 판단) | 문자 체계별로 하나씩: Latin / 한글 / 가나 / 한자 | "substitute — not the brand face" 명시. **실측 유사도 근거** |
| 3. 안전 기본값 | 문자 체계별 오픈 라이선스 기본 스택 | 대체를 정할 수 없을 때 |

- **유사도 판단:** "비슷해 보인다"가 아니라 실측으로 고른다.
  - 비교 지표: x-height 비율, 평균 글자 폭, 굵기 축, 분류(grotesk / humanist / geometric).
  - 후보 풀: 오픈 라이선스 폰트(Google Fonts, Pretendard, Noto CJK, SUIT, M PLUS 등).
  - 측정은 기존 캡처 도구를 확장해서 한다.
- **안전 기본값 후보:**
  - KR: Pretendard
  - JA: Noto Sans JP 또는 M PLUS 2
  - zh-TW: Noto Sans TC
  - Latin: 분류별 1개
- **CSS로 쓸 때:** `font-family: "Toss Product Sans", "Pretendard", sans-serif`.
  - 브랜드 폰트가 있으면 브랜드로, 없으면 대체로 렌더된다. 의미상 정직하다.
  - frontmatter `fontFamily`에도 같은 스택을 넣고, 본문에 대체라는 사실을 명시한다.
- **OmD 사이트 미리보기:** 지금은 브랜드 폰트를 못 쓰면 OmD 서체로 그린다. 이걸 "권장 대체로 표시 중 · Pretendard"처럼 이름표를 단 대체 미리보기로 바꿀 수 있다.
- **바이브코딩 안전망:** /hangul(그리고 후속 JLREQ·CLREQ 스킬)이 폰트가 빠진 경우를 잡는다. 한글 폰트가 스택 맨 앞에 없으면 BLOCK한다.

**오너 결정:**
- 3층 구조 채택 여부
- AGENTS.md 폰트 규칙 문구 정정 ("이름표 없는 대체 금지"로)

## 3. 셰이더: 바이럴 전용 니치 스킬 라인

**근거.**
- npm `shaders`(WebGPU)는 주 28.7만 다운로드, `@paper-design/shaders-react`(WebGL2)는 주 110만.
- 스킬은 **효과 하나짜리**가 잘 퍼진다: MengTo의 셰이더 스킬 1,169설치 vs 공식 204설치.
- 오너의 `tf-shaders` 실험에 CJK 맞춤 shader-landing 스킬이 있다.

**제안.**
- 범용 "셰이더 랜딩" 대신 **"와우가 필요한 순간" 단위의 작은 스킬** 2~3개로 낸다. 각 스킬은 효과 하나, 데모 영상 하나다.
  - **CJK 타이포 셰이더:** 한글·가나·한자 디스플레이 타입에 획·자모 단위 리빌을 준다. 아무도 하지 않는 영역이다.
  - **런칭 히어로:** 브랜드 색(DESIGN.md 토큰)을 받아 셰이더 배경을 만든다. 예산과 폴백을 지킨다.
  - (후보) **OG·커버 영상:** 셰이더 장면을 정지 이미지와 짧은 영상으로 렌더한다.
- **공통 원칙 (tf-shaders 스킬에서 이어받음):**
  - 장면은 하나만 둔다.
  - JS 예산을 명시한다(`shaders` 런타임은 약 750KiB).
  - WebGPU 미지원이면 정적 폴백을 쓴다.
  - `prefers-reduced-motion`을 지킨다.
  - `disableTelemetry`를 켠다.
  - 실기기 GPU로 검증한다.
- **라이브러리 선택:**
  - WebGL2 기반 paper-design이 호환 범위가 넓다.
  - 스킬이 둘 다 지원할지, 하나로 고정할지 정한다.
  - 라이선스는 출시 전에 확인한다.
- **채널:** skills.sh, ui-skills.com(PR), X·Threads 데모. 리브랜딩 랜딩 자체를 첫 데모로 쓸 수 있다.
