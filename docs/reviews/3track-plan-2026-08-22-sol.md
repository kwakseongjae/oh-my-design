# 검토 A — sol (codex, gpt-5.6-sol, medium)

대상: `docs/OMD_3TRACK_PLAN.md` + `test-v2/README.md`
일시: 2026-08-22 · 독립 검토 (grok 결과 미공유)

---

## 1. 치명적 결함
있다.
- **실험 모집단이 확정되지 않았다.** 계획에는 9개 브랜드가 명시돼 있지만, T3-4는 무신사 이후 “나머지 9개”, README는 총 10개라고 한다. 쿠팡도 이미 캡처됐다고 기록되어 실제 잔여 수는 또 다르다. 캔바는 “T3의 10개”인 동시에 T2에서 신규 작성하도록 되어 있어 `T3 → T1 → T2` 순서와 순환 의존한다. 이 상태로는 비교 분모와 완료 조건을 확정할 수 없다. [계획 §0 대상 브랜드](docs/OMD_3TRACK_PLAN.md:14), [T3 단계](docs/OMD_3TRACK_PLAN.md:76), [캔바 의존성](docs/OMD_3TRACK_PLAN.md:174), [README 목적](test-v2/README.md:3)
- **원본 증거를 보존하지 않아 evidence-first 주장을 사후 검증할 수 없다.** 원본 캡처를 커밋하지 않는 것은 가능하지만, “다시 캡처하면 된다”는 대체책은 성립하지 않는다. 커머스 이미지와 캠페인은 바뀌므로 같은 `evidence.json`을 재현할 수 없다. 원본을 Git 밖의 접근 제한 artifact store에 불변 보존하고, URL·시각·viewport·locale·파일 SHA를 manifest에 묶어야 한다. 그렇지 않으면 “근거에서 유도했는가”라는 T3의 핵심 판정 자체가 감사 불가능하다. [README §6](test-v2/README.md:123), [T3의 질문](docs/OMD_3TRACK_PLAN.md:57)
## 2. 순서·의존성 오류
- **T3-3 RUBRIC이 T3-2 왕복 뒤에 있다.** T3-2의 “허용치”가 아직 없고, 결과를 본 뒤 기준을 정하면 무신사 결과에 맞춘 사후 기준이 된다. `rubric 초안 및 임계값 동결 → 무신사 파일럿 → 측정기 교정 → rubric 최종 동결 → 본 실험` 순이어야 한다. 파일럿 결과는 최종 비교 분모에서 제외해야 한다. [T3 단계](docs/OMD_3TRACK_PLAN.md:71)
- **T1과 T3가 독립이라는 전제가 맞지 않는다.** T3가 DESIGN.md·디자인 시스템 품질을 채점하는 동안 T1이 그 규격을 바꾼다. T3 arm을 Core v2의 고정 SHA로 평가한다고 명시하거나, v3 확정 뒤 해당 축만 재실행해야 한다. 그렇지 않으면 T3 결과가 즉시 구규격 결과가 된다. [T3 판정 축](docs/OMD_3TRACK_PLAN.md:109), [T1 새 규격](docs/OMD_3TRACK_PLAN.md:124), [병행 선언](docs/OMD_3TRACK_PLAN.md:229)
- **T2의 신규 writer 게이트가 전체 마이그레이션 뒤에 있다.** reader 호환성·신규 writer·대표 canary를 먼저 확정한 다음 wave migration으로 가야 한다. 현재 순서대로 440개를 먼저 바꾸면 소비자 결함이나 writer 계약 변경 때 전체를 재변환한다. 권장 순서는 `dual reader → writer gate → 대표 canary → rollback 검증 → wave migration`이다. [T2 단계](docs/OMD_3TRACK_PLAN.md:160)
- 캔바를 T3에 넣는다면 T2까지 기다리지 말고 “카탈로그 비의존 신규 케이스”로 정의해야 한다. 그렇지 않으면 T3가 T1/T2 완료를 기다리게 된다. [캔바 설명](docs/OMD_3TRACK_PLAN.md:174)
## 3. 누락된 게이트
- **증거 캡처 QA:** 표본 선택 규칙, viewport·locale·로그인 상태, 캡처 시각, 중복 제거 기준, 재캡처 안정성, Playwright–Aside 채널 동등성 허용치가 없다. 같은 분석 코드를 쓴다는 것만으로 두 채널의 표본 추출이 동등해지지는 않는다. [README §5.1](test-v2/README.md:101)
- **비교 실행 프로토콜:** OMD를 포함한 세 팩의 SHA, 모델·컨텍스트, turn/time budget, 재시도, 생성 파라미터, arm 실행 순서 무작위화, 실패 처리, 브랜드당 반복 횟수가 없다. 생성이 확률적인데 arm당 1회면 방법론 차이와 생성 운을 분리할 수 없다. [T3-6](docs/OMD_3TRACK_PLAN.md:97)
- **판정 프로토콜:** 축별 가중치, 공통 산출물과 arm 고유 산출물의 분리, 블라인드 해제 조건, 평가자 수, 평가자 일치도, 동률·결측·abandon 처리, 최종 통과 임계값이 없다. “사용자 블라인드 판정”만으로는 재현 가능한 게이트가 아니다. [T3-7](docs/OMD_3TRACK_PLAN.md:109)
- **T1 acceptance gate:** v3의 최대 크기 예산, semantic round-trip, unknown/absent 보존, Core v2 backward read, CLI·builder·reference·book 소비자 parity, 외부 프로젝트 portability 기준이 없다. 현재는 산출물 목록만 있다. [T1 단계](docs/OMD_3TRACK_PLAN.md:137)
- **T2 canary/rollback gate:** “무손실”의 의미, 대표 canary 구성, wave별 중단 조건, rollback 복원 시험, 소비자 렌더·API parity가 정의되지 않았다. 태그가 존재하는 것과 롤백이 작동하는 것은 다르다. [T2 단계](docs/OMD_3TRACK_PLAN.md:160)
## 4. 3자 비교의 공정성
**우리 증거팩을 경쟁자에게도 주는 것 자체는 맞다. 단, 하나의 실험에만 맞다.**
- “동일한 외부 증거가 주어졌을 때 각 방법론이 무엇을 유도하는가”를 측정한다면 동일 evidence pack이 필요하다.
- 다만 `evidence.json`의 필드와 “figure-ground 실패 = edge-to-edge” 같은 해석까지 OMD가 설계하면 OMD의 내부 언어를 경쟁 arm에 강제하게 된다. 세 arm에는 원시 측정값, 스키마 설명, 캡처 provenance로 구성된 **중립 증거팩**을 주고, 프롬프트 및 디자인 결정으로의 변환은 각 arm이 수행해야 한다.
- 동일 Grok Imagine 채널은 **지시 품질 비교**에는 맞다. 하지만 Impeccable의 asset producer 등 native 도구까지 포함한 “스킬 전체 능력” 비교에는 맞지 않는다. 따라서 다음 두 lane을 분리해야 한다.
  1. Controlled lane: 동일 중립 증거팩·동일 생성채널·동일 예산  
  2. Native lane: 각 스킬의 원래 evidence/asset workflow와 권장 채널 허용
- `omd book`처럼 한 arm만 내는 산출물은 공통 품질 점수에 섞지 말고 capability coverage로 별도 보고해야 한다. [공정 조건](docs/OMD_3TRACK_PLAN.md:97), [경쟁 상대 실사](docs/OMD_3TRACK_PLAN.md:20)
동의: 동일 evidence 조건에서 OMD만 증거팩을 독점해서는 안 된다.
## 5. 측정 방법의 타당성
현재 지표들은 **저수준 시각 일치도**에는 일부 타당하지만, “브랜드 특색”의 대리지표로는 부족하다.
- 팔레트 커버리지·휘도·다이내믹 레인지는 결과물이 근거의 색조와 톤을 따랐는지 확인하는 보조 지표로 사용할 수 있다. 브랜드 식별력 자체를 측정하지는 않는다. [README §2](test-v2/README.md:39)
- 현재 “광 방향”은 실제 광원을 추정하는 것이 아니라 화면 상·하·좌·우의 평균 밝기 차이를 계산한다. 밝은 옷, 흰 배경, 피사체 위치도 광 방향으로 오인한다. 이름을 `luminance gradient`로 바꾸고 key-light 지시로 직접 승격하지 않아야 한다. [분석 구현](test-v2/tools/analysis.mjs:73)
- figure-ground 분리 실패는 “알고리즘이 분리하지 못했다”는 증거일 뿐, 곧바로 “엣지투엣지 크롭”의 증거는 아니다. 복잡한 테두리·다중 피사체·텍스처 배경도 같은 실패를 만든다. 현재 README의 해석은 과도하다. [README §3](test-v2/README.md:54), [분석 구현](test-v2/tools/analysis.mjs:107)
- 모션 크기는 8개 프레임 사이의 평균 RGB 절댓값 차이다. 실제 물체 이동, 카메라 이동, 조명 변화, 컷을 분리하지 못한다. optical flow, shot-boundary detection, camera/object motion 분리, fps 기반 속도·가속도·정지 비율로 교체해야 한다. [영상 측정 구현](test-v2/tools/capture-media-evidence.mjs:207)
브랜드 특색은 다음 3계층으로 측정해야 한다.
1. **Evidence fidelity:** 현재 팔레트·휘도·구도·모션 지표를 교정해 유지.
2. **Distinctiveness:** 로고·카피를 제거한 원본과 생성물을 대상으로 블라인드 브랜드 forced-choice, 오답 혼동행렬, “구분 불가” 비율, held-out reference retrieval을 측정.
3. **Semantic art direction:** 피사체 범주, 스타일링, 제품 framing, 카메라 거리·각도, 여백 사용, 재질·배경, 이미지와 UI/copy의 관계를 annotation rubric으로 판정.
특히 원본 자체를 로고 없이 사람들이 구분하지 못하는 브랜드라면 생성물에도 높은 식별력을 요구할 수 없다. 브랜드별 원본 인식률을 ceiling baseline으로 먼저 측정해야 한다.
## 6. 판정
**BLOCK** — 모집단·rubric·원본 증거 보존·반복/블라인드 프로토콜·브랜드 특색 지표를 먼저 고정하지 않으면, 3자 비교 결과가 어느 arm의 우열도 뒷받침하지 못한다.
