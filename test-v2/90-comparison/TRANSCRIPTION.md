# 디자인 시스템 문서 중립 전사 실행 절차

이 문서는 `RUBRIC.md` §3.3의 중립 전사를 실행하기 위한 절차다. 루브릭의 채점 항목,
가중치, 블라인드 파손 판정, 결측 규칙을 변경하지 않는다. 전사본은 디자인 시스템 문서의
내용만 평가자에게 전달하며, 원문·대응표·SHA 기록은 평가 패킷에 넣지 않는다.

## 1. 적용 단위와 불변 원칙

- 적용 단위는 각 `레인 × 브랜드 × arm × 반복` run이 낸 디자인 시스템 설명 문서다.
- 원문의 절 순서, 절 안의 문장 순서, 표 행 순서, 목록 항목 순서, 코드 행 순서를 보존한다.
- 한 원문 단위는 전사본에서도 같은 위치에 한 번만 나타난다. 단위를 다른 절로 옮기거나
  여러 항목으로 복제하지 않는다.
- 허용되는 변환은 §2의 세 가지뿐이다. 형식이 arm을 드러내더라도 그 형식에 실제 설계
  결정이 섞여 있으면 결정은 남긴다.
- 허용 변환만으로 arm 표지를 지우면서 내용을 보존할 수 없으면 임의로 고치지 않는다.
  그 문서는 `TRANSCRIPTION_BLOCKED`로 봉인하고 본 실험 채점에 제출하지 않는다.
- Core v2 용어 참고본과 그 SHA는 전사자에게 제공하지 않으며 채점·전사 패킷에도 첨부하지
  않는다.

## 2. 허용 변환 — 정확히 세 가지

### 2.1 제목 계층 중립화

제목의 계층·번호·렌더링 문법만 없애고, 제목의 내용어와 출현 위치는 남긴다. Markdown
제목, YAML의 순수 그룹 키, decision 블록의 순수 래퍼처럼 내용의 상하 관계를 시각적으로
드러내는 표지를 모두 같은 깊이의 `Heading: <내용어>` 행으로 만든다. 중첩 깊이는 전사본에
싣지 않는다. 원문 제목이 `## 3. Typography`라면 전사본은 `Heading: Typography`다.
`## Tokens (canonical)`처럼 내용어가 더 있으면 `Heading: Tokens (canonical)`로 모두
보존한다.

YAML에서는 `---`, 들여쓰기, 목록·매핑 구두점 같은 YAML 표지를 삭제하고, 순수 그룹 키는
동일 깊이 제목으로 중립화한다. 값이 있는 행은 키의 내용어와 값을 원래 순서대로 남긴다.
예를 들어 다음 원문은

```yaml
---
tokens:
  colors:
    primary: "#0055FF"
---
```

다음처럼 전사한다.

```text
Heading: tokens
Heading: colors
primary "#0055FF"
```

이는 값을 prose로 풀어 쓰거나 다른 채점 항목으로 옮기는 허가가 아니다. 배열을 표로,
표를 문장으로, 코드를 설명문으로 바꾸는 일도 금지한다.

### 2.2 표지 삭제

arm·생성기·문서 규격을 식별시키지만 설계 결정을 담지 않은 최소 문자열만 삭제한다.
브랜드명, 스키마 선언, 주석 껍데기, 장식용 박스 선·아이콘, decision 래퍼와 ID가 여기에
해당한다. 삭제 뒤 남는 내용은 원래 위치와 순서를 유지한다. 문법을 자연스럽게 만들기
위한 문장 재작성은 하지 않는다.

- `<!-- design-md:section -->`처럼 전체가 표지인 주석은 전체를 삭제한다.
- `D-014 — Use 8px spacing because …`에서는 `D-014 —`만 삭제하고 결정문은 남긴다.
- `/* Hallmark · component: button · genre: editorial */`에서는 주석 껍데기와
  `Hallmark ·`만 삭제한다. `component`, `button`, `genre`, `editorial`은 설계·방법 내용이므로
  같은 순서로 남긴다.
- `❌ Low contrast text — Maintain 4.5:1`에서는 장식 아이콘 `❌`만 삭제하고 문장과 수치는
  남긴다.

표지와 내용의 경계가 불명확하면 삭제하지 않고 `TRANSCRIPTION_BLOCKED`로 처리한다.

### 2.3 경로 삭제

로컬·저장소 경로, 파일 URI, arm 전용 디렉터리나 파일 위치를 나타내는 최소 span을
삭제한다. 경로가 들어 있던 문장 자체와 경로 앞뒤의 내용은 그대로 둔다.

- ``See `references/design-md.md` for exports.`` → `See  for exports.`
- ``Rules override `design-system/MASTER.md`.`` → `Rules override .`
- `graph.json at /run/arm-a/graph.json` → ` at `

파일명만으로 문서 기능을 설명하는 경우에도 위치 식별자인 파일명 span만 삭제한다.
URL은 원칙적으로 내용이므로 보존한다. 다만 arm 이름 또는 arm 전용 저장소 위치를 포함해
출처를 직접 노출하는 URL은 경로 삭제 예외로 전체 URL을 삭제하고 대응표에 예외 사유를
기록한다.

## 3. 금지 변환

다음은 모두 금지한다.

- §4.4의 다섯 내용 항목이나 별도 N1–N5 버킷으로 재분류하기
- 요약, 의역, 번역, 맞춤법 교정, 문체 통일, 중복 제거
- 누락된 근거·상태·반응형·접근성·제약·예시를 보강하기
- 사실성, 유용성, 완성도, 구현 일치 여부를 평가하거나 평가 문구를 덧붙이기
- 절·문장·표 행·목록·코드 행의 순서를 바꾸기
- 한 문장을 쪼개 다른 절에 배치하거나 여러 항목에 복제하기
- YAML 값을 prose로 설명하거나 표·목록·코드 사이의 표현 형식을 바꾸기
- arm 간 제목이나 어휘를 맞추기 위해 한 arm에 없는 제목·문장을 만들기
- 삭제 뒤 어색한 문장을 자연스럽게 고치기

## 4. 세 팩의 arm 노출 표지

아래 목록은 동결 팩
`benchmarks/ui-resolve-bench/fixtures/competitor-skills-2.0/`을 직접 조사해 만든다. “노출
가능”은 자동 삭제를 뜻하지 않는다. `처리`가 `보존`인 항목은 고유해 보여도 내용이므로
삭제할 수 없다.

### 4.1 omd

| 노출 표지 | 처리 | 경계 |
|---|---|---|
| Core v2 YAML frontmatter의 `---`, 스키마·버전 선언, YAML 계층 | 중립화/삭제 | YAML 문법과 순수 규격 선언만 없앤다. 토큰 값·설명·제약은 원래 순서대로 남긴다. |
| `D-*` decision ID와 순수 `decision` 래퍼 | 삭제 | ID·래퍼만 지우고 choice, rationale, alternatives, consequence의 실제 문장은 남긴다. |
| `<!-- design-md:section -->` 계열 주석 | 삭제 | 주석이 표지만 담으면 전체 삭제한다. 다른 문장이 섞였으면 표지 span만 삭제한다. |
| `graph.json` 및 그 경로 언급 | 경로 삭제 | 파일명·경로 span만 삭제하고 그래프에서 읽은 실제 결정 설명은 남긴다. |
| `omd`, `oh-my-design` 문자열 | 삭제 | 대소문자·하이픈 변형을 포함한 arm 이름의 정확한 span만 삭제한다. |
| Core v2 절 번호·중첩 깊이 | 제목 계층 중립화 | 번호와 깊이를 제거하되 제목 내용어와 절·문장 순서는 남긴다. |
| `evidence.*` 같은 필드 이름 | 보존 | 존재 자체는 가점 대상이 아니지만 값과의 관계를 바꾸지 않기 위해 보존한다. arm 이름이나 경로가 값이면 그 값의 최소 span만 삭제한다. |

### 4.2 hallmark

조사 근거는 팩의 `SKILL.md`, `references/design-md.md`, `references/slop-test.md`와
component/macrostructure reference들이다.

| 노출 표지 | 처리 | 경계 |
|---|---|---|
| `Hallmark`, `hallmark` 및 `Powered by Together AI` | 삭제 | arm/제작자 표지의 정확한 span만 삭제한다. |
| `/* Hallmark · pre-emit critique: P5 H4 E5 S4 R5 V5 */` 형식 | 부분 삭제 | 주석 껍데기·arm 이름은 삭제한다. 실제로 출력된 여섯 평정값은 원문 메타데이터로서 순서대로 남기되 채점용 설명을 붙이지 않는다. |
| page/component CSS stamp의 `Hallmark ·`, `macrostructure:`, `theme:`, `component:`, `genre:`, `states:`, `contrast:` 형식 | 부분 삭제/보존 | arm 이름과 주석 껍데기만 삭제한다. 선택된 macrostructure·theme·genre와 상태·대비 내용은 설계 결정이므로 보존한다. |
| `.hallmark/log.json`, `references/...`, `tokens.css`, `design.md`/`DESIGN.md` 위치 언급 | 경로 삭제 | 경로·파일명 span만 삭제한다. “source of truth”, override, export 같은 운영 규칙은 남긴다. |
| `# Design — <Project>`, `## System`, `## Tokens`, `## CTA voice`, `## Motion stance`, `## Exports`의 고정 계층 | 제목 계층 중립화 | 제목 깊이만 통일한다. 제목 내용과 원문 순서는 보존한다. |
| `Genre ·`, `Macrostructure ·`, `Theme ·`, `Axes · paper-band / display-style / accent-hue`, H#/S#/F#/C#/T#/Ft#/N# archetype, “slop test” gate | 보존 | pack의 공개 방법과 실제 선택을 담으므로 arm 단서여도 삭제하지 않는다. 이로 인한 식별은 §3.6의 `내용 단서` 또는 해당 근거로 측정한다. |
| “Locked design system. Future Hallmark runs …” | 부분 삭제 | `Hallmark`만 삭제하고 잠금·우선순위·수정 규칙은 운영 내용으로 남긴다. |

### 4.3 UIUX Pro Max

조사 근거는 팩의 `ui-ux-pro-max/SKILL.md`, `design-system/SKILL.md`,
`ui-ux-pro-max/scripts/design_system.py`의 ASCII/Markdown/`MASTER.md`/page override
formatter다.

| 노출 표지 | 처리 | 경계 |
|---|---|---|
| `ui-ux-pro-max`, `UIUX Pro Max`, `UI UX Pro Max` 문자열 | 삭제 | 대소문자·공백·하이픈 변형을 포함한 arm 이름의 정확한 span만 삭제한다. |
| ASCII 출력의 `TARGET: … - RECOMMENDED DESIGN SYSTEM` 표제와 `╔═╗`, `├─┤`, `██` 등 장식 | 표지 삭제/제목 중립화 | 박스 선·ANSI 색 escape·장식 swatch는 삭제한다. 프로젝트명은 같은 위치의 중립 제목으로 남긴다. |
| `# Design System Master File`, `Project`, `Generated`, `Category`로 시작하는 cover block | 부분 삭제/중립화 | 순수 표제와 `Generated` timestamp는 표지로 삭제한다. 프로젝트·category 값은 내용이므로 원래 순서대로 남긴다. |
| `> LOGIC:` 및 page override의 `IMPORTANT` banner | 부분 삭제 | blockquote/경고 장식과 경로는 삭제한다. master/override 우선순위 규칙은 운영 내용이므로 남긴다. |
| `design-system/MASTER.md`, `design-system/pages/[page-name].md`, scripts/data/assets 경로 | 경로 삭제 | 경로 span만 삭제하고 override·validation·source-of-truth 설명은 남긴다. |
| `✅`, `❌`, `⚡`, `⚠️` 및 ANSI 색상 escape | 표지 삭제 | 장식 glyph/escape만 삭제하고 뒤의 문장·색 값·수치는 남긴다. |
| `Global Rules → Color Palette → Typography → Spacing Variables → Shadow Depths → Component Specs → Style Guidelines → Page Pattern → Anti-Patterns → Pre-Delivery Checklist` 고정 계층 | 제목 계층 중립화 | 깊이만 통일한다. 제목 내용과 실제 순서는 보존한다. |
| `Primitive → Semantic → Component`, Design Dials, CSS 변수표, 고정 component CSS, anti-pattern 문장, checklist | 보존 | 생성기의 고유 템플릿일 수 있어도 설계·운영 내용이다. 형식 단서 제거를 이유로 요약하거나 삭제하지 않는다. |

## 5. 전사 담당의 자격과 격리

**전사자: `opus5` (벤더 `anthropic`).** 사용자 지정, grok-4.6 재심 판정
`ACCEPT_WITH_CONDITIONS` (2026-08-23, `docs/reviews/rubric-2026-08-23-c-transcriber-resubmit.md`).
런타임 모델 문자열은 실행 전 `run-config.json`에 기록한다.

이 문서의 초판은 전사자를 사람으로 고정하고 모델 전사를 계열 독립 조건 뒤에 뒀다.
그 조건은 이 환경에서 만족되지 않는다. 다만 **초판이 든 근거는 더 이상 참이 아니다.**
초판은 「평가자 grok-4.6·sol·sonnet5가 `xai`·`openai`·`anthropic` 세 계열을 모두 덮어
네 번째 계열 모델이 없다」고 적었으나, 2026-08-26 평가자 교체로 명부가
`xai`·`anysphere`·`anthropic`이 되면서 **`openai` 계열은 비었다.** 계열이 남지 않아서
면책되는 것이 아니다.

결론은 그대로 선다. 근거를 바꿔 다시 적는다: sol을 물린 사유가 비용이고 그 은퇴가
전면적이므로 **남은 `openai` 계열을 이 환경이 조달하지 못한다.** 전사자 지정은 사용자
결정이고 sol은 이 실험에서 완전히 빠졌다. 사람 전사는 레인 2 × 브랜드 9 × arm 3 ×
반복 4 = 216개 문서 규모라 성립하지 않는다.

*(개정 2026-08-26 — grok-4.6 판정 Q3 REVISE. §3.2a가 적은 한계는 평가자와 서빙
플랫폼에 관한 것이라 이 항목을 흡수하지 못한다. 근거·실측:
`docs/reviews/t3-3-reseal-drift-2026-08-26-opus5.md`)*

**계열 독립은 면책한다. 세션·메모리 격리와 허용 변환 세 가지는 그대로 지킨다.**
평가자 2종화는 여전히 BLOCK이다.

> **2026-09-01 번복 (판정 도구로 명시).** 위 BLOCK이 막은 선택지는 「패널을 2종으로 줄여
> 남은 계열을 전사에 쓴다」였다. 2026-09-01 사용자 결정의 명부 재봉인은 패널만 2인으로
> 줄이고 **전사는 opus5에 그대로 둔다** — 막힌 선택지와 다른 구성이다. grok-4.6 패널
> 재봉인 판정(docs/reviews/t3-panel-reseal-2026-09-01-opus5.md 판정문, Q1)이 이 문장을
> 근거로 BLOCK을 들어 올렸다. 원문은 이력으로 남긴다.

### 5.1 격리 조건 (전부 필수)

- 전사 세션은 채점 세션과 **대화·메모리를 공유하지 않는다.**
- 전사 세션의 입력은 이 문서와 해당 run의 원문 **하나뿐**이다. 이 레포의 스킬,
  `AGENTS.md`, Core v2 참고본, 다른 arm의 산출물은 넣지 않는다.
- 채점 패킷에는 `PASS` 전사본만 들어간다.
- `opus5`는 채점·파일럿 앵커 조정·arm 추측·결과 해석에 참여하지 않는다.
- 전사 산출물에 점수·결함·식별 가능성 메모가 나오면 그 run은 `TRANSCRIPTION_BLOCKED`다.
- 판단이 필요한 경계는 삭제하지 않고 fail-close한다.

### 5.2 의미 검증자 — `WAIVED`

내용 보존의 비기계 검증은 **두지 않는다.** 전수 사람 검증은 철회되고 슬롯은 `WAIVED`다.
평가자 3종과 `opus5`에게 원문을 보여 검증하지 않는다. 나중에 사람을 들이면 전사자와
다른 ID여야 하고 채점에 참여하지 않는다.

기계 검증(§7.1)이 유일한 검증이며, 실패를 사람 판단으로 덮지 않는다.

### 5.3 리포트 첫 절에 그대로 적을 문장

> 문서 축 중립 전사는 평가자 sonnet5와 같은 anthropic 계열의 별개 인스턴스 opus5가
> 수행한다. 채점 세션·메모리는 공유하지 않으나 계열 독립 조건은 충족하지 못한다.
> 전사 왜곡은 허용 변환 세 가지와 fail-close, 전수 기계 검증으로 통제했고 비기계
> 의미 검증은 두지 않았다. 이 상관을 채점 사전확률과 같은 줄에 두지 않는다.

## 6. 봉인 항목

각 run 문서마다 평가자에게 공개되지 않는 seal manifest에 다음을 기록한다.

1. arm, lane, brand, repeat, run ID
2. 원문 파일별 상대 식별자와 원시 바이트 SHA-256
3. 전사본 파일의 원시 바이트 SHA-256
4. 전사 절차 파일 `TRANSCRIPTION.md`의 SHA-256
5. 전사자 ID, 검증자 ID, 전사·검증 시작/종료 시각
6. 사용한 문자 인코딩과 줄바꿈 형식
7. 문장 대응표 파일의 SHA-256
8. 검증 결과와 `PASS` 또는 `TRANSCRIPTION_BLOCKED`

SHA는 파일을 읽은 원시 바이트 그대로 계산한다. 해시 전에 줄바꿈, Unicode, 공백을
정규화하지 않는다. seal manifest와 대응표는 전사본과 다른 봉인 위치에 두며 채점 패킷에
첨부하지 않는다.

### 6.1 문장 대응표 형식

“문장”은 자연어 문장만 뜻하지 않는다. 순서를 기계적으로 확인할 수 있도록 다음 원문
단위를 순차 ID로 자른다.

- 제목 1개
- 문단 안의 문장 1개
- 목록 항목 1개
- 표의 행 1개
- fenced code의 물리적 한 행
- 독립된 주석·메타데이터 행 1개

대응표는 CSV로 봉인하며 열 순서를 다음처럼 고정한다.

```text
run_id,source_file_sha256,source_unit_id,source_ordinal,source_locator,action,removed_span_sha256,transcript_unit_id,transcript_ordinal,review_status
```

- `source_unit_id`는 파일마다 `O000001`부터 증가한다.
- `transcript_unit_id`는 전사본 전체에서 `T000001`부터 증가한다.
- `action`은 `KEEP`, `HEADING_NEUTRALIZE`, `MARKER_DELETE`, `PATH_DELETE` 또는 `+`로
  결합한 값만 허용한다.
- 완전히 삭제된 순수 표지 단위는 `transcript_unit_id`와 `transcript_ordinal`을 빈 값으로
  두며, 삭제 원문 span의 SHA-256을 기록한다.
- 한 단위에서 일부만 삭제했으면 같은 행에 대응되는 transcript ID를 쓰고 삭제된 최소
  span의 SHA-256을 기록한다. 삭제 span이 여러 개면 원문 출현 순서대로 SHA를 `;`로 잇는다.
- `source_locator`는 원문 파일의 byte start/end offset이다. line number는 줄바꿈 변환에
  취약하므로 보조값으로만 둘 수 있다.
- 원문 내용 자체나 arm 이름은 대응표에 복사하지 않는다.

## 7. 검증 절차

### 7.1 기계 검증

전사자가 아닌 실행 관리자가 다음 검사를 수행한다. 하나라도 실패하면 비기계 검증으로
덮지 않고 `TRANSCRIPTION_BLOCKED`다.

1. 원문·전사본·대응표 SHA를 다시 계산해 seal manifest와 일치시킨다.
2. 원문 단위가 대응표에 정확히 한 번씩 있고 `source_ordinal`이 연속인지 확인한다.
3. 완전 삭제된 순수 표지를 제외한 모든 단위가 정확히 하나의 transcript 단위에 대응하며,
   `transcript_ordinal`이 원문의 상대 순서를 뒤집지 않는지 확인한다.
4. `action` 값이 §2의 세 변환과 `KEEP`만 쓰는지 검사한다.
5. 숫자, 음수, 소수, 백분율, 비율, hex/RGB/HSL/OKLCH 색, px/rem/em/ms/s 단위,
   breakpoint, 날짜, 버전, CSS 변수, CLI flag를 원문과 전사본에서 순서대로 추출해 비교한다.
6. fenced/inline 명령어와 URL을 순서대로 추출해 바이트 비교한다.
7. 5·6에서 차이가 난 항목은 해당 span이 `MARKER_DELETE` 또는 `PATH_DELETE`로 대응표에
   명시된 경우에만 예외로 허용한다. 예를 들어 arm 이름이 든 명령이나 arm 저장소 URL은
   삭제 예외가 될 수 있다. 예외는 자동 통과시키지 않고 허용 표지 목록과 정확히
   일치하는지도 검사한다.
8. 금지 문자열과 구조 표지를 탐지한다: omd/oh-my-design, Hallmark, UIUX Pro Max 변형,
   `D-*`, `design-md:section`, YAML fence/들여쓰기 계층, arm 전용 경로, CSS/ASCII stamp,
   ANSI escape. 발견 시 전사 실패다.
9. 전사본에 대응 원문이 없는 단어·행·표 셀·코드가 추가되지 않았는지 확인한다.

기계 검증기는 `test-v2/tools/transcribe-verify.mjs`이며 고정 SHA-256은
`ae588ca3f30147ce6b7e670be281bd92afc720505047dffef0344d0812f7fdc3`다. 실행자는 전사자가 아니다 — `opus5`는 이 검사를 돌리지 않는다.

**2026-09-02 검증기 개정 (내용 커밋 → grok 판정 → 핀).** 직전 SHA `73d13200…`의 결함 2건을 고쳤다.
(1) §7.1.8 탐지기가 omd 결정 ID의 실제 형식 `D-P2-1`(정규식 `D-\d{2,}`)과 하이픈 표기 `ui-ux-pro-max`를 놓쳤다 —
파일럿 apple/omd rep-2·3·4가 결정 ID 8·11·7개를 실은 채 PASS했고, baemin 전사자(opus5)가 이를 잡았다.
(2) §7.1.6이 펜스 블록을 한 토큰으로 비교해 펜스 안의 **선언된** MARKER_DELETE(§4.1 2행이 명령하는 결정 ID 주석 삭제)가
`added`로 잡혀 면허 불가였다 — 이제 선언 구간을 원문에서 제거한 뒤 펜스를 바이트 대조한다. 선언 없는 펜스 안 편집은 여전히 차단.
셀프테스트 3건 추가(10/10). 기존 PASS 전사본 20건은 새 검증기로 재검증 PASS, 3건(apple/omd rep-2·3·4)은 차단되어 재전사한다.
검증 절차 문안(§7.1.1–9)은 바뀌지 않았다 — 도구가 문안을 따르게 된 것이다.

검증기는 **두 판정만** 낸다: `PASS`, `TRANSCRIPTION_BLOCKED`. §5.2가 비기계 의미
검증을 폐지했으므로 「사람이 한 번 봐야 한다」는 중간 판정은 담당이 없다. CLI는
`PASS`일 때만 exit 0이다.

검증기는 **선언된 삭제가 정당했는지 판정하지 않는다** — 손실된 토큰이 선언 구간
안에서 발생했는지만 본다. 그 구분을 흐리면 「표지를 지웠다」가 임의 손실의 면허가
된다. 같은 값이 본문에도 있으면 선언 구간 밖 손실로 세어 차단한다.

### 7.2 비기계 검증 — `WAIVED`

**이 절은 §5.2에 따라 폐지됐다.** 별도 인간 의미 검증자를 두지 않는다. 초판의 이 절은
사람 검증자가 원문과 전사본을 나란히 읽는 절차를 규정했으나, 사용자 결정(사람 검수
없음)과 216개 문서 규모 때문에 성립하지 않는다.

따라서 §7.1 기계 검증이 **유일한 검증**이며, 그 실패를 사람 판단으로 덮을 경로는 없다.
검증기도 이에 맞춰 판정을 둘로 줄였다 — `PASS` 또는 `TRANSCRIPTION_BLOCKED`. 「사람이
한 번 봐야 한다」는 중간 판정은 담당이 없으므로 만들지 않는다.

초판이 사람에게 맡기려던 항목 중 기계로 갈음한 것과 갈음하지 못한 것을 구분해 적는다.

| 초판 항목 | 지금 |
|---|---|
| 부정·조건·예외·범위·인과·불확실성의 의미 보존 | **미검증.** 허용 변환 세 가지가 문장을 건드리지 않는다는 것으로만 통제한다 |
| 대명사·지시어의 대상이 삭제 뒤에도 오인되지 않는가 | **미검증.** 같은 통제 |
| 표의 열 관계·목록 종속·코드 실행 의미 | 부분 — §7.1.6이 코드와 URL을 순서대로 바이트 비교한다 |
| 삭제된 span이 순수 표지·경로였는가 | §7.1.7이 **선언 span 안에 들어가는지**를 본다. 선언이 정당했는지는 판정하지 않는다 |
| 내용인데 arm 단서라고 지우지 않았는가 | §7.1.7의 같은 검사가 선언 밖 손실을 차단한다 |

**미검증 두 항목은 리포트 한계 절에 그대로 적는다.** 기계 검증을 통과했다는 사실을
의미 보존이 확인됐다는 뜻으로 쓰지 않는다.

### 7.3 제출과 블라인드 확인

- 평가 패킷에는 익명 전사본만 넣는다. 원문 SHA, 전사본 SHA, 대응표, seal manifest,
  팩 경로, 이 절차 문서는 넣지 않는다.
- 파일럿과 본 실험은 동일한 전사 형식과 검증 절차를 쓴다.
- 모든 채점 뒤 §3.6에 따라 평가자마다 익명 산출물의 arm을 한 번 추측하게 한다. 전사에서
  남겨야 했던 고유 방법·내용 때문에 알아본 경우는 숨기지 않고 평가자의 근거 분류에
  기록한다.
- `PASS`인 전사본만 채점에 제출한다. `TRANSCRIPTION_BLOCKED`를 빈 문서나 임의 요약으로
  대체하지 않는다.
