# 검토 B — grok-4.6

대상: `docs/OMD_3TRACK_PLAN.md` + `test-v2/README.md`
일시: 2026-08-22 · 독립 검토 (sol 결과 미공유)

---

## 1. 치명적 결함

**있다. T3-2를 이 문서대로 실행하면, 이전 실패(근거 없이 지어냄)를 같은 파이프라인이 다시 만든다.**

**영상.** `docs/OMD_3TRACK_PLAN.md` T3-2 산출물은 `이미지셋 + 영상 2본`이다. 무신사 `test-v2/00-evidence/musinsa/evidence.json` `motion`은 `"present": false`, `"no video above the fold at capture time"`이다. 같은 계획 T3-1·`test-v2/README.md` §0·§3은 비어 있는 슬롯을 문장으로 쓰지 말라고 한다. 영상 2본을 내려면 모션 근거가 없는 상태에서 생성해야 한다. 게이트를 지키면 산출물이 안 나오고, 산출물을 지키면 방법론이 깨진다.

**대상 URL이 증거와 다르다.** 계획 표는 무신사를 `musinsa.com/category/001`·캡처 완료로 적는다 (`docs/OMD_3TRACK_PLAN.md` §대상 화면). 실제 파일은 `https://www.musinsa.com/` → `.../recommend?gf=A`다 (`evidence.json` `source.url` / `finalUrl`). 표의 화면으로 왕복하면 다른 표면의 숫자로 프롬프트를 쓰게 된다.

**크롬이 이미 캠페인 색이다.** 도메인 분리의 이유 자체가 세이지 그린 프로모 배너를 브랜드 색으로 오인한 것이었다 (`test-v2/README.md` §2). 지금 `chrome.primaryButton.background`는 `#5ccca8`이고 라벨은 빈 문자열이다 (`evidence.json`; README §5도 그대로 적음). 수집기는 “접힌 면 위 가장 큰 불투명 버튼/링크”다 (`capture-media-evidence.mjs` `collectChrome`). `pageBackground`/`bodyColor`는 둘 다 `#000000`인데 `typeScale`은 h3 `#000000`과 p `#ffffff`가 섞여 있다. 카탈로그 `web/references/musinsa/DESIGN.md`는 같은 스토어프론트를 canvas `#ffffff`·primary `#000000`로 적는다. T3-1 템플릿이 `chrome.pageBackground`와 이 버튼을 슬롯에 넣으면, 측정 단계에서 이미 캠페인 CTA가 브랜드 크로메로 들어간다.

이 세 가지를 고치지 않은 T3-2는 완료되어도 “근거 유도”를 증명하지 못한다.

---

## 2. 순서·의존성 오류

동의: T3에서 9개 캡처를 유도 규칙보다 앞세우지 않는 것 (`docs/OMD_3TRACK_PLAN.md` §다음 행동). T2를 T1 확정 뒤로 두는 것 (같은 문서 T2 서두).

**T3-2가 T3-3보다 앞이다.** T3-2 게이트는 “대조 편차가 허용치 내”인데, 허용치·루브릭은 T3-3 `90-comparison/RUBRIC.md`다. 왕복의 통과/실패를 정할 기준이 왕복 뒤에 온다.

**T3-1 템플릿과 실제 aggregate가 어긋난다.** T3-1은 figure-ground 2/12이면 `subjectCenter`를 비우라고 한다. `evidence.json` aggregate는 `figureGroundResolved: "2/12"`인데도 `subjectCenterX: 0.518`, `subjectCenterY: 0.555`를 넣는다 (`analysis.mjs`는 해상된 표본만 중앙값). n=2 중앙값은 거의 프레임 중앙이고, 10/12 엣지투엣지라는 관찰과 동시에 쓸 수 없다. T3-1을 이 JSON에 그대로 적용하면 계획이 금한 숫자를 인용한다.

**T1-4가 T1-1의 결론을 미리 적는다.** 문제 정의는 440개 legacy가 무겁다는 것이고, 이미 `spec/design-md-core-v2.md`가 “본문은 계약, 상세는 그래프”로 그 분리를 한다. 카탈로그 쓰기는 `CORE_V2_CATALOG_WRITE_BLOCKED`다 (`.agents/skills/omd-add-reference/SKILL.md`). T1-4 산출물 이름이 `design-md-core-v3.md`이면, T1-1이 “v2로 충분한가”를 재기도 전에 재작성을 전제한다. T2-5(440→600)는 그 리더/라이터가 생기기 전에는 착수 불가인데, 계획은 T1을 T3와 병행만 하고 이 블록을 적지 않는다.

**T3-7 DESIGN.md 축과 T1 병행.** T3는 현재 DESIGN.md 품질을 채점하고, T1은 그 규격을 바꾼다. 비교 루브릭을 어느 규격에 고정할지 없다. 병행 자체는 가능하고, 채점 계약이 없다.

**브랜드 집합이  internally 불일치한다.** README는 “10개 대기업”, 계획 표는 9개, T3-4는 “나머지 9개”(이미 무신사·쿠팡 2건 완료), 캔바는 T2로 미룬다. 치명은 아니고, T3-4를 이대로 실행하면 대상이 한 바퀴 빗나간다.

---

## 3. 누락된 게이트

| 단계 | 빠져 있는 통과 조건 |
|---|---|
| T3-1 | “숫자가 evidence에 있다”만 있다. **쓰면 안 되는 숫자(해상 n 부족, 캠페인 CTA, 모션 없음)가 프롬프트에 없는지를 기계 검증하지 않는다.** 이전 실패의 역방향이다. |
| T3-2 | 허용치 없음. 생성 채널이 프롬프트당 4변형인데 (`test-v2/README.md` §7) 어떤 장을 대조하는지도 없음. |
| T3-4 | “figure-ground 미해결률 기록”은 로그이지 게이트가 아님. 쿠팡은 이미 `pageBackground`/`header`/`primaryButton`이 null이다 (`coupang/evidence.json` `chrome`). 크롬이 비면 그 브랜드를 세트에 남길지 기준이 없다. README §5.1의 탈락 조건은 CAPTCHA뿐. |
| T3-5 | 영상 없는 브랜드를 스킵할지, 데이터셋에서 빼는지 없음. 무신사가 그 케이스다. |
| T3-6 | 브리프 본문·필수 산출물 목록·질문 허용 여부·타임박스 없음. hallmark 기본 플로우는 질문 후 진행한다 (`hallmark/SKILL.md` Design-context gate). 침묵을 동일 브리프로 볼지 미정. |
| T3-7 | “사용자 블라인드 판정”과 `verify.json` 수치 불일치 시 어느 쪽이 승인지 없음. “G2 기준”은 이 문서에 정의가 없고, 레포 `spec/migration-checklist.md` G2는 컴포넌트 클래스 수다. |
| T1-2~T1-6 | 단계 표에 게이트 열이 없다. “이게 없으면 DESIGN.md가 아니다”의 판정자·기각 조건이 없음. |
| T2-5 | 신규 레퍼런스 작성은 카탈로그 라이터 게이트가 이미 막혀 있다. T2 표는 그 전제를 다시 걸지 않는다. |

---

## 4. 3자 비교의 공정성

**구멍 있다. 한 실험에 서로 배타적인 두 가설을 동시에 걸었다.**

계획 §0: “핸디캡 없음. SHA 고정 팩 그대로, 최대 강도.”  
T3-6: 동일 브리프 · 동일 `evidence.json` · 동일 grok imagine, “다른 것은 방법론뿐.”

둘을 같이 만족할 수 없다.

**생성 채널.** Impeccable `impeccable_asset_producer`는 승인 목업 **크롭에 대한 image-to-image**가 본업이다. 기본 도구는 하네스 네이티브 이미지 툴, 폴백은 `generate-image.mjs`(gpt-image-2)다 (`agents/impeccable_asset_producer.toml` Input/Workflow/Prompt Pattern). Hallmark 이미지 계층은 typography → CSS/SVG → Nanobanana/Recraft다 (`hallmark/SKILL.md` §4). 세 arm을 grok imagine에 고정하면 지시문 품질 실험이 되고, 스킬 최대 강도 실험이 아니다. 후자를 주장하면 채널 고정이 핸디캡이다.

**증거팩.** JSON만 주는 것은 우리 인코딩을 공유하는 것이지, 경쟁 방법론의 입력을 공유하는 것이 아니다. Impeccable은 래스터 레퍼런스를 요구하고, Hallmark `study`는 스크린샷 또는 URL이다. `test-v2/README.md` §6는 `capture/*.png`를 커밋하지 않는다고 하므로, 계획문 그대로면 비교 입력은 JSON뿐이다. 픽셀을 이미 우리가 요약해 준 뒤 “근거 유도”를 채점하면, 그 JSON을 슬롯에 넣도록 만든 T3-1 템플릿이 유리하다.

반대로 JSON을 우리만 쓰는 것도 조작이다. 맞는 공유물은 **같은 날의 스냅샷**(고정 URL + 로컬 PNG + JSON)이고, 각 arm은 자기 계약이 읽는 층만 쓴다.

**DESIGN.md 축이 omd 채점표다.** T3-7은 “결정 ID ↔ 토큰 역참조, 희생 명시, 빈 값 처리”, “omd book”, “컴포넌트 상태 매트릭스”다. Hallmark `design.md`는 기본 산출이 아니고 `lock the system` / `lock the DNA` opt-in이며, URL 모드 제3자 사이트는 attestation 없이 emission을 거절한다 (`references/design-md.md`, `SKILL.md` study). Impeccable `document`는 **이미 있는 코드**에서 DESIGN.md를 뽑는다 (`reference/document.md`). 브리프가 이 산출을 명시적으로 요구하지 않으면 두 경쟁자는 그 축에서 자동 패배한다. 요구해도, 채점 항목이 Core v2 계약이면 형식 대결이지 품질 대결이 아니다.

공정하게 가려면 실험을 쪼개야 한다.

- A: 같은 JSON → 같은 grok imagine → `verify.json`. 주장 문장은 “지시 품질”로 한정.
- B: 같은 브리프 + 같은 스냅샷 → 각 팩 네이티브 경로 → UI·시스템 문서. 채점은 공통 축(화면 결함, 블라인드 유사)과 각 형식별 계약 준수로 분리.

---

## 5. 측정 방법의 타당성

**브랜드 특색의 대리지표로는 타당하지 않다.** 이 캡처에 대한 **지시 추종** 지표로는 일부가 쓸 수 있다. 계획이 묻는 질문(“근거에서 유도했는가”)과 사용자가 여기서 묻는 질문(“브랜드 특색인가”)이 다르다.

| 지표 | 실제 측정 (`test-v2/tools/analysis.mjs`) | 브랜드 특색? |
|---|---|---|
| 팔레트 커버리지 | 160px 리사이즈 후 5-bit 양자화, 상위 6 bin | 아니오. 무신사 sample 1 상위 hex는 `#6e6a6b`/`#716d6e`/`#6a6565`처럼 같은 회색의 양자화 파편이다. 캠페인 사진의 히스토그램이지 토큰이 아니다. README §2가 이미 한 장 팔레트를 금지했는데, 12장 중앙값도 같은 홈 프로모 집합이다(alt: “FW 26 신상”). |
| 휘도·다이내믹 레인지 | 프레임 luma p05–p95 | 그날 사진의 키/필 정도만. 캠페인마다 바뀐다고 README §2가 적는다. 브랜드 불변량이 아니다. |
| 광 방향 | 좌/우·상/하 절반 평균 휘도 차, 임계 0.04 | 조명 추정이 아니다. 밝은 옷이 한쪽에 있으면 “brighter left”가 된다. 주석이 “key light from camera left”의 대용이라고 적는데 (`analysis.mjs` `light()`), 그건 다른 물리량이다. |
| figure-ground | 테두리 평균색에서 벗어난 질량중심. 실패 시 좌표 생략 | 실패율 자체(2/12, 3/12)는 “풀블리드 크롭”의 정당한 관찰이다 (`README` §3). 그 소수 성공의 중앙값을 구도로 쓰는 것은 부당하다. |
| 모션 크기 | `<video>` 시크 후 프레임 L1 거리 | 히어로 `<video>`가 있을 때만. 무신사는 없음. 많은 프로덕션 URL도 없을 가능성이 크다. |

생성물을 같은 지표로 다시 재면 원형이다. 프롬프트가 `meanLuma 0.752`를 넣고 `verify.json`이 휘도 편차를 보면, 측정하는 것은 브랜드가 아니라 슬롯 준수다.

대체해야 할 것:

- **UI 특색:** 안정 선택자의 크롬(헤더, 기본 내비, 문서화된 CTA). “가장 큰 불투명 버튼” 금지. 카탈로그에 이미 있는 토큰과 충돌하면 캡처를 채택하지 말고 미해결로 둔다.
- **사진 문법:** 중앙값이 아니라 **분포 라벨**. 예: 풀블리드 vs 인셋, 상품-채움 vs 여백 있는 모델, 스튜디오 vs 로케이션. 해상 비율이 임계 미만이면 구도 좌표 없음.
- **색:** 이미지 bin을 브랜드 팔레트로 쓰지 않는다. 크롬 색 + “이미저리는 캠페인이며 팔레트가 아니다”.
- **빛:** “key light”라는 단어를 쓰지 않는다. 쓸 거면 밝기 편향(brightness falloff)이라고 부른다.
- **브랜드 특색 판정:** 픽셀 거리와 분리된 블라인드 인간 판정(이 장이 이 브랜드 사진/UI처럼 보이는가). 픽셀 지표는 캡처 충실도 보조만.

---

## 6. 판정

**PROCEED_WITH_CHANGES** — T3-1은 위 캡처·슬롯 규칙을 고친 뒤에만 열 수 있고, T3-2 영상 요구와 T3-6 “최대 강도 + 동일 imagine/JSON”은 이 문서대로면 실험이 성립하지 않는다.

고치기 전에는 T3-2·T3-6에 착수하지 않는 것이 이 계획의 전제(“지어내지 않는다”)와 일치한다.
